---
title: markdownGFM
description: ''
pubDate: 2023-07-30T12:17:51.094Z
updatedDate: 2023-07-30T12:17:51.094Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkpepx4m
tags:
    - 'Tutorial'
    - 'Markdown'
category: 'Quick Start'
lang: 'en'
---

## Github Extended Markdown (GFM)

This article offers a brief introduction (and only includes the extensions that can be rendered as highlighted by the color:color[HsuBlog]{color="gold"}). For a more detailed exploration, please refer to the [official GitHub documentation](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github).

`Github Extended Markdown`, often abbreviated as `GFM`, is a dialect or variant of Markdown used on `GitHub`. It introduces some extended features to the standard Markdown syntax, making Markdown more adaptable for web displays and presentations related to code.

### Task Lists

You can create task lists using a `-` followed by `[ ]` and `[x]` to represent unfinished and finished tasks, respectively.

```markdown
- [x] Completed task
- [ ] Unfinished task
```

- [x] Completed task
- [ ] Unfinished task

### Code Highlighting

In standard Markdown, we can create code blocks. But in GFM, we can also specify the language for the code block, enabling code highlighting.

```javascript
function sayHello() {
    console.log("Hello, GFM!");
}
```

### Tables

GFM allows you to create tables. Use `|` to separate columns, and `-` to create headers. Additionally, you can align the text in columns to the left, right, or center by adding colons (:) to the left, right, or both sides of the hyphens in the header row.

```markdown
| Header Left  | Header Center  |  Header Right |
| :----------- | :------------: | ------------: |
| Content Left | Content Center | Content Right |
| Content Left | Content Center | Content Right |
```

| Header Left  | Header Center  |  Header Right |
| :----------- | :------------: | ------------: |
| Content Left | Content Center | Content Right |
| Content Left | Content Center | Content Right |

PS: To create tables more swiftly, you can use the [graphical interface](https://www.tablesgenerator.com/markdown_tables).

### Automatic Links

GFM will automatically turn URLs into links:

`https://github.com`: https://github.com

### Strikethrough

Text wrapped with two `~` characters will be struck through.

```markdown
This is a~~strikethrough~~example.
```

This is a~~strikethrough~~example.

### Emojis

GFM supports the shortcodes for emojis. For instance:

`:smile:`: 😀

For more emojis, check out the [emoji shortcode list](https://gist.github.com/rxaviers/7360908).