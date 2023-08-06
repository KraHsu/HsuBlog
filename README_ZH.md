# HsuBlog 💕🏡

[![使用Astro构建](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)

HsuBlog是一个漂亮且客制化的Astro个人博客主题🌟🖥️。这个主题实际上借鉴了 [hexo-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 和 [HeoBlog](https://blog.zhheo.com/update/) 的很多内容。

HsuBlog遵循最佳实践，📜✅并确保开箱可用。它原生支持浅色模式和深色模式，提供高度客制化的选项，允许用户根据自己独特的需求和偏好定制自己的体验。

## 在线演示 😎🌐

[![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)
### [https://hsublog.pages.dev](https://hsublog.pages.dev)

## 为什么选择 HsuBlog 🤪❓

- [x] 极快的性能 🚀⚡
- [x] 深色模式 🌒✨
- [x] 模糊搜索 🔎💡
- [x] 分页 📄📌
- [x] 标签和类别 🏷️📚
- [x] 网站地图和RSS订阅源 🗺️🔔
- [x] 高度可定制 🛠️🎨
- [x] "本地FontAwesome图标" 🖼️💎
- [x] 对搜索引擎友好 🕷️🔗
- [x] 遵循最佳实践 ✅🥇
- [x] 支持markdown gfm, KaTex/Mathjax 以及一些其他独特的扩展语法（正在进行中）📝🔧
- [x] 支持i18n
- [x] 响应式 (移动设备 ~ 笔记本 ~ 带鱼屏)

PS：关于性能，这取决于你如何使用它。在我的测试中，灯塔的性能分数平均超过85。如果不使用大尺寸的图片，甚至可以达到97分。为什么不试试看 😁。

## 项目结构 🤐📂

```bash
├── public # 存放在这里的文件会被原封不动地复制到网站根目录
│  ├── locales # 存放翻译字段 主题默认带中文和英文
│  │  ├── en
│  │  │  └── translation.json
│  │  └── zh
│  │     └── translation.json
│  ├── robots.txt
│  └── scripts # 存放需要使用的 js 和 json 文件
└── src
   ├── components # 存放主题所使用的组件 普通使用无需更改
   ├── layouts # 存放主题布局文件 普通使用无需修改
   ├── utils # 存放一些 ts 函数 普通使用无需修改
   ├── styles # 存放主题样式文件 .scss
   │  └── custom.scss # 自定义样式可以写在这里
   ├── pages # 存放页面
   ├── content # 存放博客文件 .md，所有博客内容都存放在这里
   │  ├── blog
   │  │  ├── en
   │  │  │  └── default # 存放默认示例英文博客
   │  │  └── zh
   │  │     └── default # 存放默认示例中文博客
   │  └── config.ts
   ├── env.d.ts # 类型定义 普通使用无需修改
   ├── exMarkdown # 存放 Markdown 编译处理相关函数
   │  └── markdownThemes
   │     ├── darkTheme.json # 代码块夜间模式样式 VsCode 格式
   │     └── lightTheme.json # 代码块日间模式样式 VsCode 格式
   ├── theme_config.ts # HsuBlog 主题配置文件
   └── site_config.ts # HsuBlog 站点配置文件
```

Astro将`src/pages/`目录中的`.astro`或`.md`文件转换为网站路由，使用它们的文件路径。

任何静态资源应放在`public/`目录中。

所有博客文章都存储在`src/content/blog`目录中。

此主题提供了一个CLI，用于快速创建这些内容。

## 文档 📄👓

你可以在[演示](https://demo.krahsu.top)中找到你想要的一切（在未来）。

我将尽快完成文档。

## 技术栈 🏗️🛠️

**框架** : [Astro](https://astro.build/) & [Vue](https://vuejs.org/)  
**类型** : [TypeScript](https://www.typescriptlang.org/)  
**样式** : [Scss](https://www.sass.hk/)  
**搜索** : [FuseJS](https://fusejs.io/)  
**图标** : [FontAwesome](https://fontawesome.com/) & [IconPark](https://iconpark.oceanengine.com/home)  
**国际化** : [astro-i18next](https://github.com/yassinedoghri/astro-i18next)

## 如何开始 🚀 🏁

### 1. 克隆仓库 📥📝

你只需要在命令行中运行以下代码（选择其中一个）。

```bash
# git - 推荐使用git，方便后续更新
git clone https://github.com/KraHsu/HsuBlog.git
# 或者 
# npm 6.x
npm create astro@latest --template KraHsu/HsuBlog
# 或者 
# npm 7+，需要额外的双破折号：
npm create astro@latest -- --template KraHsu/HsuBlog
# 或者 
# yarn
yarn create astro --template KraHsu/HsuBlog
```

### 2. 安装依赖 🧰⚙️

```bash
npm install
# 或者
yarn install
# 或者 
pnpm install
```

### 3. 启动开发服务器 🖥️⚡

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

### 预览和构建 🏗️👀

```bash
npm run preview
npm run build
# 或者
yarn preview
yarn build
# 或者
pnpm preview
pnpm build
```

### 其他命令 🎛️🔧

所有命令都是在项目的根目录下，从终端运行：

| 命令                       | 动作                                                                                             |
| :------------------------- | :----------------------------------------------------------------------------------------------- |
| `yarn run sync`            | 生成TypeScript类型。[了解更多](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `yarn run new <title>`     | 创建一个新的帖子，标题为                                                                         |
| `yarn run newpage <title>` | 创建一个新的页面，标题为                                                                         |
| `yarn run abbr`            | 在markdown文件的标题中添加永久链接                                                               |
| `yarn run i18n`            | 创建基本的国际化页面(不包括已创建的Markdown文件)                                                 |

使用 `yarn run -h` 获取帮助

## 待办事项

...

## 贡献 💡💬

如果你发现了任何问题或有任何建议，欢迎创建 [Issues](https://github.com/KraHsu/HsuBlog/issues) 或提交 [Pull Requests](https://github.com/KraHsu/HsuBlog/pulls)。

当然也可以通过[我的邮箱](mailto:charles040318@gmail.com)或QQ(1191393280)联系我。

## 许可证 📃🔏

本项目在MIT许可证下授权，版权所有©2023

---

由[枢衡KraHsu](https://blog.krahsu.top)用❤设计和构建
