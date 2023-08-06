import { visit } from "unist-util-visit";
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import { utils } from "../utils/utils";
import { writeFileSync } from "fs";
import { processRehype, processRemark, processDir } from "./processMd";

import mdata from "../../public/scripts/mdata.json";

mdata.totalWordCounts = 0;
mdata.totalPostCounts = 0;

export function markdownDirectives() {
  return (tree: any, file: any) => {
    visit(tree, (node, index, parent) => {
      switch (node.type) {
        case "textDirective":
          if (node.name === "i")
            processDir.dirIcon(node, index as number, parent);
          else if (node.name === "color") processDir.dirColor(node);
          break;
        case "leafDirective":
          if (node.name === "link") processDir.dirLink(node, parent);
          else if (node.name === "note")
            processDir.dirNoteL(node, index, parent);
          else if (node.name === "bili") processDir.dirBilibili(node, file);
          else if (node.name === "youtube") processDir.dirYoutube(node, file);
          break;
        case "containerDirective":
          if (node.name === "links") processDir.dirLinks(node);
          else if (node.name === "timeline")
            processDir.dirTimeline(node, index, parent);
          else if (node.name === "gallery")
            processDir.dirGallery(node, index, parent);
          break;
      }
    });
  };
}

export function remarkFrontmatter() {
  return function (tree: any, { data }: any) {
    // 阅读时长
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.numberOfWords = textOnPage.length;
    data.astro.frontmatter.minutesRead = readingTime.minutes;
    mdata.totalWordCounts += textOnPage.length;
    mdata.totalPostCounts += 1;
    writeFileSync(
      "./public/scripts/mdata.json",
      JSON.stringify(mdata, null, 2)
    );
  };
}

export function rehypeFrontmatter() {
  return function (tree: any, { data }: any) {
    // 目录
    const toc: {
      level: string;
      id: string;
      value: string;
    }[] = [];
    const headings = ["h1", "h2", "h3"];
    visit(tree, (node) => {
      if (
        headings.includes(node.tagName) &&
        !("className" in node.properties)
      ) {
        const id = utils.generateIdFromHeading(node.children[0].value);
        toc.push({
          level: node.tagName[1],
          id: id,
          value: node.children[0].value,
        });
      }
    });
    data.astro.frontmatter.toc = toc;
  };
}

export function rehypeRestyling() {
  return (tree: any) => {
    visit(tree, (node, index, parent) => {
      switch (node.tagName) {
        case "blockquote":
          processRehype.processBlockquote(node);
          break;
        case "table":
          processRehype.processTable(node, parent, index);
          break;
        case "img":
          if (!node.properties.className) {
            processRehype.processImg(node, parent, index);
          }
          break;
        case "a":
          processRehype.processA(node);
          break;
        // default:
        //   console.log(node);
      }
      // switch (node.type) {
      //   case "raw":
      //     if (node.value.slice(0, 4) === "<pre") console.log(node);
      // }
    });
  };
}

export function remarkRestyling() {
  return (tree: any, file: any) => {
    visit(tree, (node, index, parent) => {
      switch (node.type) {
        case "code":
          if (!node.meta?.lang) {
            processRemark.processCode(node, parent, index);
          }
          break;
        case "link":
          if (node.children[0]?.type === "image") break;
          processRemark.processLink(node);
          break;
        // default:
        //   console.log(node);
      }
    });
  };
}
