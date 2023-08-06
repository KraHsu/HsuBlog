import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { utils } from "../utils/utils";
import { SiteConfig } from "../site_config";
// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SearchData {
  title: string;
  content: string;
  url: string;
  cover: string;
}

const searchDatas: Record<string, SearchData[]> = {};

export function generateSearchData() {
  return (node: any, file: any) => {
    if (file.history[0].includes(`content\\blog`)) {
      const frontmatter = file.data.astro.frontmatter;
      const content = utils.cleanContent(file.value as string);
      const lang = frontmatter.lang || SiteConfig.i18n.default;
      if (!(lang in searchDatas)) searchDatas[lang] = [];
      searchDatas[lang].push({
        title: frontmatter.title,
        content: content,
        url: `/${lang === SiteConfig.i18n.default ? "" : lang + "/"}blog/${
          frontmatter.abbrlink
        }`,
        cover: frontmatter.cover,
      });

      const filePath = path.resolve(
        __dirname,
        `../../public/scripts/searchData-${lang}.json`
      );

      fs.writeFileSync(filePath, JSON.stringify(searchDatas[lang], null, 2));
    }
  };
}
