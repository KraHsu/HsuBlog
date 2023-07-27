import fs from "fs";
import { utils } from "./utils";
// import { SiteConfig } from "../site_config";

import { fileURLToPath } from "url";
import { dirname } from "path";

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
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      console.log(__dirname);
      try {
        fs.writeFileSync(
          "./public/scripts/searchData.json",
          JSON.stringify(searchDatas, null, 2)
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
}
