import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { promisify } from "util";
import { glob } from "glob";
import { utils } from "./src/utils/utils.js";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

const getDateString = () => {
  const date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
};

const getHexTimestamp = () => {
  const timestamp = Date.now();
  const hexTimestamp = timestamp.toString(36);

  return hexTimestamp;
};

const createMdFile = async (filename: string) => {
  const dateStr = getDateString();
  const hexTimestamp = getHexTimestamp();
  const filePath = path.resolve(
    `./src/content/blog/${utils.generateIdFromHeading(filename)}.md`
  );

  if (fs.existsSync(filePath)) {
    console.error(`${filePath} 已存在`);
    process.exit(1);
  }

  console.log(`已创建：${filePath}`);

  const content = `---
title: ${filename}
description: ''
pubDate: ${dateStr}
updatedDate: ${dateStr}
heroColor: ''
abbrlink: ${hexTimestamp}
tags: 
    - ''
category: ''
---`;

  await writeFileAsync(filePath, content);
};

const createMdPage = async (filename: string) => {
  const dirPath = path.resolve(`./src/pages/${filename}`);
  const filePath = path.resolve(dirPath, "index.md");

  if (!fs.existsSync(dirPath)) {
    await mkdirAsync(dirPath);
  }

  if (fs.existsSync(filePath)) {
    console.error(`${filePath} 已存在`);
    process.exit(1);
  }

  console.log(`已创建：${filePath}`);

  const content = `---
layout: "../../layouts/DefaultMdLayout.astro"
title: ${filename}
description: ""
heroColor: "#007aff"
useComments: true
useToc: true
---

## ${filename}`;

  await writeFileAsync(filePath, content);
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
      console.log(`已添加永久链接：${filepath}`);
    }
  } catch (error) {
    console.error(`无法添加链接：${filepath}`);
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

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("请提供具体命令");
  process.exit(1);
}

const command = args[0];
const arg1 = args[1];

if (command === "new") {
  createMdFile(arg1);
} else if (command === "abbr") {
  addAbbrlinkToFiles();
} else if (command === "newPage") {
  createMdPage(arg1);
} else {
  console.log(`未知命令: ${command}`);
  process.exit(1);
}
