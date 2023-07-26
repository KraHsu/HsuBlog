import fs from "fs";
import { utils } from "./utils";
// import { SiteConfig } from "../site_config";

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

      fs.writeFileSync(
        "./public/scripts/searchData.json",
        JSON.stringify(searchDatas, null, 2)
      );
    }
  };
}
