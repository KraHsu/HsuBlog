export const utils = {
  checkURL: function (URL: string) {
    const regex =
      /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/i;
    return regex.test(URL);
  },
  replaceLink: function (str: string, customClass?: string): string {
    let regex = /\[(.*?)\]\((.*?)\)/g;
    return str.replace(regex, function (_, text, link) {
      return `<a href="${link}" class="${customClass}">${text}</a>`;
    });
  },
  executeEmbeddedScripts: function (str: string): string {
    const pattern = /\{\{\s*([\s\S]*?)\s*\}\}/g;
    let result = str.replace(pattern, function (_, match) {
      let func;
      try {
        func = new Function(`return (function(){${match};})()`)();
      } catch (err) {
        console.error(err);
        return "";
      }
      return func;
    });

    return result;
  },
  formatDate: (date: Date | string) => {
    if (typeof date === "string") {
      date = new Date(date);
    }
    var formattedDate = date.toLocaleDateString();

    // 返回格式化后的日期
    return formattedDate;
  },
  compareDates: (date1: string, date2: string): number => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return d2.valueOf() - d1.valueOf();
  },
  generateIdFromHeading: (heading: string): string => {
    // 没有找到 remark 官方的处理函数
    return (
      heading
        .trim()
        .toLowerCase()
        // 替换空格为 '-'
        .replace(/[\s]+/g, "-")
        // 除了字母、数字、中文字符、和 '-' 之外的所有字符都被移除
        .replace(/[^\w\u4e00-\u9fa5\-]+/g, "")
        // 替换多个 '-' 为单个 '-'
        .replace(/\-\-+/g, "-")
    );
  },
  extractSummary: (markdown: string): string => {
    // 移除 Markdown 标题标记
    const noHeaders = markdown.replace(/^(#.*\n)*/g, "");

    // 移除 Markdown 格式化
    const noFormatting = noHeaders.replace(/(\*|\_|`|#)/g, "");

    // 删除 Markdown 链接和图片
    const noLinksOrImages = noFormatting.replace(/\[([^\]]*)\]\([^\)]*\)/g, "");

    // 移除行尾的换行符
    const noLinebreaks = noLinksOrImages.replace(/\n/g, " ");

    // 返回前100个字符
    return noLinebreaks.slice(0, 100);
  },
  cleanContent: function (content: string): string {
    content = content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`.*?`/g, "")
      .replace(/\[.*?\]\(.*?\)/g, "")
      .replace(/[*#\-_]+/g, " ")
      .replace(/[\n\t]/g, "")
      .replace(/\s+/g, " ")
      .replace(/:+(.*?)(\[.*?\]|"")(""|\{.*?\})/g, " ")
      .replace(/:+/g, " ")
      .trim();

    return content;
  },
};
