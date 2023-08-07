import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { promisify } from "util";
import { glob } from "glob";
import { SiteConfig } from "./src/site_config.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const languages: string[] = SiteConfig.i18n.languages;
const defaultLanguage: string = SiteConfig.i18n.default;
const nonDefaultLanguages: string[] = languages.filter(
  (lang) => lang != defaultLanguage
);

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
  for (const language of languages) {
    const dirPath = path.resolve(
      __dirname,
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
  for (const lang of languages) {
    const dirPath = path.resolve(
      __dirname,
      `./src/pages/${lang === defaultLanguage ? "" : lang + "/"}${filename}`
    );
    const filePath = path.resolve(dirPath, "index.md");

    const content = `---
layout: "@layout/DefaultMdLayout.astro"
title: ${filename}
description: ""
heroColor: "#007aff"
themeColor: ''
useComments: true
useToc: false
---
  
## ${filename}`;

    await createFile(filePath, dirPath, content);
  }
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

const replaceDefaultLang = async (files: string[], lang: string) => {
  for (const file of files) {
    const content = await readFileAsync(file, "utf8");

    const regex =
      /const thePageLanguage = ".*"; \/\/the language of this page/g;

    const updatedContent = content.replace(
      regex,
      `const thePageLanguage = '${lang}'; //the language of this page`
    );

    await writeFileAsync(file, updatedContent, "utf8");
  }
};

const updateI18n = async () => {
  const excludeDirs: string[] = [];
  for (const lang of nonDefaultLanguages) {
    const searchPath = `./src/pages/${lang}/**/*.astro`;
    excludeDirs.push(searchPath);
    const files = await glob(searchPath);
    replaceDefaultLang(files, lang);
  }
  const searchPath = "./src/pages/**/*.astro";
  const files = await glob(searchPath, {
    ignore: excludeDirs,
  });
  replaceDefaultLang(files, defaultLanguage);
};

const argv = yargs(hideBin(process.argv))
  .command("new <filename>", "Create a new post with the title <filename>")
  .command("abbr", "Add a permalink to markdown files")
  .command("newPage <filename>", "Create a new page with the title <filename>")
  .command("i18n", "Create basic internationalized pages")
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
} else if (argv._[0] === "i18n") {
  updateI18n();
}
