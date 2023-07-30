---
title: markdownGFM
description: 'Github扩展Markdown或简称GFM是GitHub上的Markdown方言或变种。'
pubDate: 2023-07-30T12:17:51.094Z
updatedDate: 2023-07-30T12:17:51.094Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkpepx4m
tags:
    - '教程'
    - 'Markdown'
category: '快速开始'
lang: 'zh'
---

## Github扩展Markdown (GFM)

本文只作简要介绍（且只包含:color[HsuBlog]{color="gold"}可渲染的扩展），更多内容可参见[GitHub官方文档](https://docs.github.com/cn/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)。

`Github扩展Markdown`或简称`GFM`是`GitHub`上的Markdown方言或变种。它在标准Markdown语法的基础上增加了一些扩展功能，使得Markdown更加适合于网页显示和代码相关的内容展示。

### 任务列表

您可以创建任务列表，用`-`后跟`[ ]`和`[x]`来代表未完成和已完成的任务。

```markdown
- [x] 已完成任务
- [ ] 未完成任务
```

- [x] 已完成任务
- [ ] 未完成任务

### 代码高亮

在标准的Markdown中，我们可以创建代码块。但在GFM中，我们还可以为代码块指定语言，从而实现代码高亮。

```javascript
function sayHello() {
    console.log("Hello, GFM!");
}
```

### 表格

GFM允许您创建表格，用`|`来分隔列，并使用`-`来创建表头，同时您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。

```markdown
| 表头左 | 表头中 | 表头右 |
| :----- | :----: | -----: |
| 内容左 | 内容中 | 内容右 |
| 内容左 | 内容中 | 内容右 |
```

| 表头左 | 表头中 | 表头右 |
| :----- | :----: | -----: |
| 内容左 | 内容中 | 内容右 |
| 内容左 | 内容中 | 内容右 |

PS: 为了更快的创建表格，可以使用[图形化界面](https://www.tablesgenerator.com/markdown_tables)

### 自动链接

GFM会自动将URL转化为链接：

`https://github.com`: https://github.com

### 删除线

使用两个`~`包裹文字可以创建删除线。

```markdown
这是一个~~删除线~~示例。
```

这是一个~~删除线~~示例。

### 表情符号

GFM支持使用表情符号的简写。例如：

`:smile:`: 😀

更多表情可查看[表情符号简码列表](https://gist.github.com/rxaviers/7360908)