---
title: Extended Search
description: "HsuBlog's Extended Search Syntax Using Fuse.js"
pubDate: 2023-07-23T00:45:44.455Z
updatedDate: 2023-07-23T00:45:44.455Z
heroColor: ''
abbrlink: lkk0v40t
tags: 
    - 'localSearch'
    - 'Extended Search'
category: 'Default Page'
---

## Extended Search

This site uses [fusejs](https://www.fusejs.io) to provide local search services, allowing you to use extended search - a search format that can fine-tune search results, similar to:color[unix]{color="green"}

Space represents logical `AND`, pipe symbol | represents logical `OR`, and to escape spaces, use double quotes `""`.

| **Token**   | **Match type**             | **Description**                        |
| ----------- | -------------------------- | -------------------------------------- |
| `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
| `=scheme`   | exact-match                | Items that are `scheme`                |
| `'python`   | include-match              | Items that include `python`            |
| `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
| `^java`     | prefix-exact-match         | Items that start with `java`           |
| `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
| `.js$`      | suffix-exact-match         | Items that end with `.js`              |
| `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |

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




