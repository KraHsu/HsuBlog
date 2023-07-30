import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { promisify } from "util";
import { glob } from "glob";
import { SiteConfig } from "./src/site_config.js";
import { utils } from "./src/utils/utils.js";

interface Argv {
  _: string[];
  filename?: string;
  $0: string;
}

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

const getDateString = () => {
  const date = new Date();
  return date.toISOString();
  // const monthNames = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  // const month = monthNames[date.getMonth()];
  // const day = date.getDate().toString().padStart(2, "0");
  // const year = date.getFullYear();
  return date.toISOString();
};

const getHexTimestamp = () => {
  const timestamp = Date.now();
  const hexTimestamp = timestamp.toString(36);

  return hexTimestamp;
};

const createFile = async (
  filePath: string,
  dirPath: string,
  content: string
) => {
  // Get all directories from dirPath
  const directories = dirPath.split(path.sep);

  // Make sure all directories exist, create them if necessary
  for (let i = 1; i <= directories.length; i++) {
    const segment = directories.slice(0, i).join(path.sep);
    if (!fs.existsSync(segment)) {
      await mkdirAsync(segment);
    }
  }

  if (fs.existsSync(filePath)) {
    console.error(`File ${filePath} already exists.`);
    process.exit(1);
  }

  await writeFileAsync(filePath, content);
  console.log(`File created: ${filePath}`);
};

const createMdFile = async (filename: string) => {
  const dateStr = getDateString();
  const hexTimestamp = getHexTimestamp();

  // split filename into path and actual filename
  const filenameParts = filename.split("/");
  const actualFilename = filenameParts.pop();

  // create the full directory path
  for (const language of SiteConfig.i18n.languages) {
    const dirPath = path.resolve(
      `./src/content/blog/${language}`,
      ...filenameParts
    );
    const filePath = path.resolve(dirPath, `${actualFilename}.md`);

    const content = `---
title: ${actualFilename}
description: ''
pubDate: ${dateStr}
updatedDate: ${dateStr}
heroColor: ''
themeColor: ''
cover: ''
abbrlink: ${hexTimestamp}
tags: 
    - ''
category: ''
lang: '${language}'
---`;

    await createFile(filePath, dirPath, content);
  }
};

const createMdPage = async (filename: string) => {
  const dirPath = path.resolve(`./src/pages/${filename}`);
  const filePath = path.resolve(dirPath, "index.md");

  const content = `---
layout: "../../layouts/DefaultMdLayout.astro"
title: ${filename}
description: ""
heroColor: "#007aff"
themeColor: ''
useComments: true
useToc: false
---

## ${filename}`;

  await createFile(filePath, dirPath, content);
};

const addAbbrlinkToFile = async (filepath: string) => {
  try {
    const content = await readFileAsync(filepath, "utf8");
    const parsedMatter = matter(content);

    if (!parsedMatter.data.abbrlink) {
      const pubDateStr = parsedMatter.data.pubDate;
      const pubDate = new Date(pubDateStr);
      const abbrlink = pubDate.getTime().toString(36);

      parsedMatter.data.abbrlink = abbrlink;

      const fileContent = matter.stringify(content, parsedMatter.data);
      await writeFileAsync(filepath, fileContent);
      console.log(`Permalink added: ${filepath}`);
    }
  } catch (error) {
    console.error(`Unable to add link: ${filepath}`);
    console.error(error);
  }
};

const addAbbrlinkToFiles = async () => {
  try {
    const files = await glob("./src/content/blog/**/*.md");
    for (const file of files) {
      await addAbbrlinkToFile(file);
    }
  } catch (error) {
    console.error(error);
  }
};

const argv = yargs(hideBin(process.argv))
  .command("new <filename>", "Create a new post with the title <filename>")
  .command("abbr", "Add a permalink to markdown files")
  .command("newPage <filename>", "Create a new page with the title <filename>")
  .help()
  .alias("help", "h").argv as Argv;

if (argv._[0] === "new") {
  if (argv.filename) {
    createMdFile(argv.filename);
  } else {
    console.error('Filename is required for the "new" command');
  }
} else if (argv._[0] === "abbr") {
  addAbbrlinkToFiles();
} else if (argv._[0] === "newPage") {
  if (argv.filename) {
    createMdPage(argv.filename);
  } else {
    console.error('Filename is required for the "newPage" command');
  }
}
