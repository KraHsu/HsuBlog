import type { Child } from "hastscript";
import type { Element } from "hastscript/lib/core";
import { h } from "hastscript";

export const processRemark = {
  processBlockquote: function (node: any) {
    const iLeft = h("i", { className: ["fa-solid", "fa-quote-left"] });
    const iRight = h("i", { className: ["fa-solid", "fa-quote-right"] });

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

export const processRehype = {
  processCode: function (node: any, parent: any, index: any) {
    let lineNumbers = "";
    node.meta = {
      lang: node.lang || "code",
    };
    for (
      let i = 0;
      i < node.value.replace(/\n+$/, "").split("\n").length;
      i++
    ) {
      lineNumbers += '<div class="line-number"></div>';
    }
    const newNode = [
      {
        type: "html",
        value: `<div class='code-block'><div class='code-lang'>${node.meta.lang}</div><div class='code-wrap'>`,
      },
      node,
      {
        type: "html",
        value: `<div class="line-numbers">${lineNumbers}</div></div><div class='code-copy' title='copy code' onclick='hsu.copyCode(event)'><i class="fa-solid fa-copy"></i></div></div>`,
      },
    ];
    parent.children.splice(index, 1, ...newNode);
  },

  processLink: function (node: any) {
    const icon = {
      type: "html",
      value: '<i class="fa-solid fa-link"></i>',
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
        href: attributes.link || "javascript:void(0);",
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
  // console.log(tagName, properties, children);
  const hastNode = h(tagName, properties, ...children);
  return convertToRemarkFormat(hastNode);
}
