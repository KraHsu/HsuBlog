import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { utils } from "./utils";
// import { SiteConfig } from "../site_config";
// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SearchData {
  title: string;
  content: string;
  url: string;
}

const searchDatas: SearchData[] = [];

export function generateSearchData() {
  return (_: any, file: any) => {
    if (file.history[0].includes(`content\\blog`)) {
      const content = utils.cleanContent(file.value as string);

      searchDatas.push({
        title: file.data.astro.frontmatter.title,
        content: content,
        url: `/blog/${file.data.astro.frontmatter.abbrlink}`,
      });

      const filePath = path.resolve(
        __dirname,
        "../../public/scripts/searchData.json"
      );

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(searchDatas, null, 2));
      } else {
        const currentData = JSON.parse(
          fs.readFileSync(filePath, { encoding: "utf-8" })
        );
        const newData = [...currentData, ...searchDatas];
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
      }
    }
  };
}
