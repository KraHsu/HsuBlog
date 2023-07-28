import type { Child } from "hastscript";
import type { Element } from "hastscript/lib/core";
import { h } from "hastscript";
import type * as shiki from "shiki";
import { renderToHtml, getHighlighter } from "shiki";
import darkThemeData from "./darkTheme.json";
import lightThemeData from "./lightTheme.json";

const darkTheme = await getHighlighter({
  theme: darkThemeData as any,
});
const lightTheme = await getHighlighter({
  theme: lightThemeData as any,
});
const _darkTheme = darkTheme.getTheme();
const _lightTheme = lightTheme.getTheme();

export const processRehype = {
  processBlockquote: function (node: any) {
    const iLeft = {
      type: "raw",
      value:
        '<svg xmlns="http://www.w3.org/2000/svg" class="quote-left" viewBox="0 0 448 512"><path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>',
    };
    const iRight = {
      type: "raw",
      value:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="quote-right"><path fill="currentColor" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>',
    };

    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i].tagName !== "p") continue;
      node.children.splice(i + 1, 0, iRight);
      node.children.splice(i, 0, iLeft);
      i += 2;
    }
  },

  processTable: function (node: any, parent: any, index: any) {
    const wrap = h("div.table-wrap", node);
    parent.children.splice(index, 1, wrap);
  },

  processImg: function (node: any, parent: any, index: any) {
    parent.tagName = "div";
    parent.properties.className = "image";

    const fancybox = h(
      "a.img-wrap",
      {
        "data-fancybox": "",
        "data-caption": node.properties.alt,
        href: node.properties.src,
      },
      node
    );

    parent.children.splice(index, 1, fancybox);

    if (
      index &&
      parent.children.length > index + 1 &&
      parent.children[index + 1].type === "text"
    ) {
      const comment = h("span.img-comment", parent.children[index + 1]);
      parent.children.splice(index + 1, 1, comment);
    }
  },

  processA: function (node: any) {
    node.properties.className = node.properties.className || "link";
  },
};

export const processRemark = {
  processCode: function (node: any, parent: any, index: any) {
    const newNode = {
      type: "html",
      value: `<div class='code-block'><div class='code-head'><div class="code-expand"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill="currentColor" d=\"M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z\"/></svg></div><div class='code-lang'>${
        node.lang || "code"
      }</div></div>${getHighlightHtml(
        node.value,
        node.lang || "code",
        "dark"
      )}${getHighlightHtml(
        node.value,
        node.lang || "code",
        "light"
      )}<div class='code-copy' title='copy code' onclick='hsu.copyCode(event)'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill="currentColor" d=\"M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z\"/></svg></div></div>`,
    };
    parent.children.splice(index, 1, newNode);
  },

  processLink: function (node: any) {
    const icon = {
      type: "html",
      value:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>',
    };
    node.children.push(icon);
  },
};

export const processDir = {
  dirLink: function (node: any, parent: any) {
    const attributes = node.attributes || {};
    const wrap = hh(
      "a.dir-link",
      {
        ...(attributes.link ? { href: attributes.link } : {}),
        style: `background: ${attributes.color || "rgba(255, 255, 255, .2)"};`,
        id: attributes.id,
        class: attributes.class,
      },
      h(
        "div.dir-link-logo-wrap",
        h("img.dir-link-logo", {
          src: attributes.logo,
        })
      ),
      h(
        "div.dir-link-content",
        h("div.dir-link-header", node.children[0].value),
        h("div.dir-link-desc", attributes.desc)
      )
    );
    Object.assign(node, wrap);
  },

  dirLinks: function (node: any) {
    const { children } = node;
    let i, child;

    for (i = 0; i < children.length; i++) {
      child = children[i];

      if (child?.data?.directiveLabel) {
        Object.assign(
          child,
          hh("div.dir-links-title", child.children[0].value)
        );
      } else if (child.name === "link") {
        break;
      }
    }

    const links = children.splice(i);
    children.push(hh("div.dir-links-links", ...links));
    simpleConvert(node, "div.dir-links");
  },
  dirColor: function (node: any) {
    simpleConvert(node, "span.dir-color");
    node.data.hProperties.style =
      (node.data.hProperties.style || "") +
      `color:${node.attributes.color || ""};`;
    node.data.hProperties.style =
      (node.data.hProperties.style || "") +
      `background:${node.attributes.bg || ""};`;
  },
  dirNoteL: function (node: any, index: number | null, parent: any) {
    parent.children.splice(
      index,
      1,
      hh(
        "div.dir-note-wrap",
        {
          style: `background: ${node.attributes.bg || ""};color: ${
            node.attributes.color || ""
          };border-left-color: ${node.attributes.color || ""}`,
          class: node.attributes.class,
          id: node.attributes.id,
        },
        h("i.dir-note-icon", {
          class: node.attributes.icon,
        }),
        Object.assign(node, hh("span.dir-note", node.children))
      )
    );
  },
  dirTimeline: function (node: any, index: number | null, parent: any) {
    const { title, content } = getTitleAndContent(node);
    const color = node.attributes.color || "";
    const times = h(
      "div.dir-timeline-time",
      {
        style: `color: ${color};`,
      },
      h("div.dir-timeline-line", {
        style: `border-color: ${color};`,
      }),
      ...content
    );
    for (let i = 0; i < times.children.length; i++) {
      let child = times.children[i] as any;
      if (child.type === "containerDirective" && child.name === "time")
        this.dirTime(child, i, times);
    }
    Object.assign(
      title,
      hh(
        "div.dir-timeline-title",
        title?.children ? title.children[0]?.value : ""
      )
    );
    parent.children.splice(index, 1, hh("ul.dir-timeline", title, times));
  },
  dirTime: function (node: any, index: number | null, parent: any) {
    const { title: time, content } = getTitleAndContent(node);
    const color = node.attributes.color || "";
    const timecolor = node.attributes.timecolor || "";
    const bg = node.attributes.bg || "";
    parent.children.splice(
      index,
      1,
      hh(
        "li.dir-time-wrap",
        {
          class: node.attributes.class || "",
          id: node.attributes.id || "",
        },
        h(
          "div.dir-time",
          {
            style: `color: ${timecolor};`,
          },
          time?.children ? time.children[0]?.value : ""
        ),
        h(
          "div.dir-time-content",
          {
            style: `color: ${color};background: ${bg};`,
          },
          ...content
        ),
        h("div.dir-time-circle", {
          style: `border-color: ${bg};`,
        })
      )
    );
  },
};

function getTitleAndContent(node: any) {
  let title: any = {},
    content: Child[] = [];
  if (node.children[0].data?.directiveLabel === true) {
    title = node.children[0];
    content = node.children.splice(1);
  } else {
    content = node.children.splice(0);
  }
  return {
    title: title,
    content: content,
  };
}

function simpleConvert(node: any, tagName: string, properties?: object) {
  Object.assign(
    node,
    hh(
      tagName,
      {
        class: node.attributes.class,
        id: node.attributes.id,
        ...properties,
      },
      node.children
    )
  );
}

function convertToRemarkFormat(hastNode: any): any {
  if ((hastNode.type as any) === "text") return hastNode;
  const children = hastNode.children as Element[];
  hastNode.data = {
    hName: hastNode.tagName,
    hProperties: hastNode.properties,
  };
  hastNode.children = children?.map(convertToRemarkFormat);
  return hastNode;
}

function hh(
  tagName: string,
  properties?: Record<string, any>,
  ...children: Child[]
) {
  const hastNode = h(tagName, properties, ...children);
  return convertToRemarkFormat(hastNode);
}

function getHighlightHtml(
  code: string,
  lang: shiki.Lang,
  theme: "dark" | "light"
) {
  const tokens =
    theme === "dark"
      ? darkTheme.codeToThemedTokens(code, lang)
      : lightTheme.codeToThemedTokens(code, lang);
  const options =
    theme === "dark"
      ? {
          themeName: _darkTheme.name,
          fg: _darkTheme.fg,
          bg: _darkTheme.bg,
        }
      : {
          themeName: _lightTheme.name,
          fg: _lightTheme.fg,
          bg: _lightTheme.bg,
        };

  const html = renderToHtml(tokens, {
    ...options,
    elements: {
      pre({ className, style, children }) {
        className = className.replace(/shiki/g, "hsu-code");

        style +=
          '; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;"';

        return `<div class='code-wrap ${theme}'><pre class="${className}" style="${style}" tabindex="0">${children}</pre></div>`;
      },
      code({ children }) {
        return `<code class='block-code'>${children}</code>`;
      },
    },
  });
  return html;
}
