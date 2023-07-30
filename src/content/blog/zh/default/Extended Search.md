---
title: 扩展搜索
description: "使用Fuse.js实现的HsuBlog的扩展搜索语法"
pubDate: 2023-07-23T00:45:44.455Z
updatedDate: 2023-07-23T00:45:44.455Z
heroColor: ''
abbrlink: lkk0v40t
tags: 
    - '本地搜索'
    - '扩展搜索'
category: '默认页面'
lang: 'zh'
---

## 扩展搜索

本站使用[fusejs](https://www.fusejs.io)提供本地搜索服务，允许您使用扩展搜索——一种可以微调搜索结果的搜索格式，类似于:color[unix]{color="green"}

空格代表逻辑与`AND`，管道符|代表逻辑或`OR`，如要转义空格请使用双引号`""`
| **令牌**    | **匹配类型**     | **描述**                    |
| ----------- | ---------------- | --------------------------- |
| `jscript`   | 模糊匹配         | 与 `jscript` 模糊匹配的项目 |
| `=scheme`   | 精确匹配         | 是 `scheme` 的项目          |
| `'python`   | 包含匹配         | 包含 `python` 的项目        |
| `!ruby`     | 反向精确匹配     | 不包含 `ruby` 的项目        |
| `^java`     | 前缀精确匹配     | 以 `java` 开头的项目        |
| `!^earlang` | 反向前缀精确匹配 | 不以 `earlang` 开头的项目   |
| `.js$`      | 后缀精确匹配     | 以 `.js` 结尾的项目         |
| `!.go$`     | 反向后缀精确匹配 | 不以 `.go` 结尾的项目       |

