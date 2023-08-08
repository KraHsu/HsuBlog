---
layout: "@layout/DefaultMdLayout.astro"
title: about
description: ""
heroColor: "#007aff"
themeColor: ''
useComments: true
useToc: true
---

# HsuBlog 💕🏡

:::gallery[badges]
![使用Astro构建](https://astro.badg.es/v1/built-with-astro.svg)  

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)
:::

HsuBlog is a beautiful, customized, personal blog theme for Astro 🌟🖥️. This theme actually borrows a lot from [hexo-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) and [HeoBlog](https://blog.zhheo.com/update/)

This theme inherently followes best practices and assures accessibility as a fundamental feature 📜✅. Both light and dark modes are natively supported. Additionally, it offers superior customization options, allowing users to tailor their experience to their unique needs and preferences.

## Live Demo 😎🌐

[![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)

**[https://hsublog.pages.dev](https://hsublog.pages.dev)**

## Why HsuBlog 🤪❓

- [x] super fast performance 🚀⚡
- [x] dark mode 🌒✨
- [x] fuzzy search 🔎💡
- [x] pagination 📄📌
- [x] tags and categories 🏷️📚
- [x] sitemap & rss feed 🗺️🔔
- [x] highly customizable 🛠️🎨
- [x] "Local FontAwesome Icons" 🖼️💎
- [x] SEO-friendly 🕷️🔗
- [x] followed best practices ✅🥇
- [x] markdown gfm, KaTex/Mathjax and some other unique extension syntax (in progress) 📝🔧
- [x] i18n supported
- [x] responsive (mobile ~ desktops)

PS: About the performance, It depends on how you use it. In my tests, lighthouses' performance scores averaged over 85. It can even reach 97 points without using large size pictures. Why not give it a try 😁.

## Project Structure 🤐📂

```bash
├── public # Files placed here will be copied to the website root directory as-is.
│  ├── locales # Contains translation fields; theme comes with Chinese and English by default.
│  │  ├── en
│  │  │  └── translation.json
│  │  └── zh
│  │     └── translation.json
│  ├── robots.txt
│  └── scripts # Contains required js and json files.
└── src
   ├── components # Theme components; typically unmodified.
   ├── layouts # Theme layout files; typically unmodified.
   ├── utils # Contains ts functions; typically unmodified.
   ├── styles # Contains theme style files in .scss format.
   │  └── custom.scss # Custom styles can be written here.
   ├── pages # Contains pages.
   ├── content # Contains blog files in .md format; all blog content is stored here.
   │  ├── blog
   │  │  ├── en
   │  │  │  └── default # Contains the default sample English blog.
   │  │  └── zh
   │  │     └── default # Contains the default sample Chinese blog.
   │  └── config.ts
   ├── env.d.ts # Type definitions; typically unmodified.
   ├── exMarkdown # Contains functions related to Markdown compilation.
   │  └── markdownThemes
   │     ├── darkTheme.json # Code block night mode style in VsCode format.
   │     └── lightTheme.json # Code block daytime mode style in VsCode format.
   ├── theme_config.ts # HsuBlog theme configuration file.
   └── site_config.ts # HsuBlog site configuration file.
```

Astro turns `.astro` or `.md` files in the `src/pages/` directory into website routes, using their file path.

Any static resource should be placed in the `public/` directory.

All blog posts are stored in `src/content/blog` directory.

This theme provides a  CLI for quickly creating these contents.

## Documentation 📄👓

You can find all you want (in the future) in the [Demo](https://demo.krahsu.top)

I will complete the documentation as soon as possible

## Tech Stack🏗️🛠️

**Framework** : [Astro](https://astro.build/) & [Vue](https://vuejs.org/)  
**Type** : [TypeScript](https://www.typescriptlang.org/)  
**Styling** : [Scss](https://www.sass.hk/)  
**Search** : [FuseJS](https://fusejs.io/)  
**Icons** : [FontAwesome](https://fontawesome.com/) & [IconPark](https://iconpark.oceanengine.com/home)  
**I18n** : [astro-i18next](https://github.com/yassinedoghri/astro-i18next)

## Getting Started🚀🏁

### 1. Clone the repo 📥📝

You just need to run this code from your command line (pick one).

```bash
# git - Recommended for the convenience of subsequent updates
git clone https://github.com/KraHsu/HsuBlog.git
# or 
# npm 6.x
npm create astro@latest --template KraHsu/HsuBlog
# or 
# npm 7+, extra double-dash is needed:
npm create astro@latest -- --template KraHsu/HsuBlog
# or 
# yarn
yarn create astro --template KraHsu/HsuBlog
```

### 2. Install Dependencies🧰⚙️

```bash
npm install
# or
yarn install
# or 
pnpm install
```

### 3. Start development Server🖥️⚡

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Preview & Build🏗️👀

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or
pnpm preview
pnpm build
```

### Other Commands🎛️🔧

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                                                                     |
| :------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `yarn run sync`            | Generates TypeScript types. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `yarn run new <title>`     | Create a new post with the title                                                                           |
| `yarn run newpage <title>` | Create a new page with the title                                                                           |
| `yarn run abbr`            | Add a permalink to markdown files title                                                                    |
| `yarn run i18n`            | Create basic internationalized pages (excluding already created Markdown files)                            |

use `yarn run -h` for help

## To Do

...

## Contribution 💡💬

If you encounter any issues or have any suggestions, feel free to create [Issues](https://github.com/KraHsu/HsuBlog/issues) or submit [Pull Requests](https://github.com/KraHsu/HsuBlog/pulls).

You can also contact me through [my email](mailto:charles040318@gmail.com) or QQ (1191393280).

## License📃🔏

Licensed under the MIT License, Copyright © 2023

---

Hope you enjoy it! ❤️🎉

Design & Build with ❤ by [枢衡KraHsu](https://blog.krahsu.top)
