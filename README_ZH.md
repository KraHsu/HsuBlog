# HsuBlog 💕🏡

[![使用Astro构建](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)

HsuBlog是一个漂亮且客制化的Astro个人博客主题🌟🖥️。这个主题实际上借鉴了 [hexo-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 和 [HeoBlog](https://blog.zhheo.com/update/) 的很多内容。

HsuBlog遵循最佳实践，📜✅并确保开箱可用。它原生支持浅色模式和深色模式，提供高度客制化的选项，允许用户根据自己独特的需求和偏好定制自己的体验。

## 在线演示 😎🌐

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

PS：关于性能，这取决于你如何使用它。在我的测试中，灯塔的性能分数平均超过85。如果不使用大尺寸的图片，甚至可以达到97分。为什么不试试看 😁。

## 项目结构 🤐📂

```bash
根目录
 ├─公共
 │  └─脚本
 └─源码
    ├─组件
    │  ├─动画
    │  ├─侧边栏
    │  ├─客户端
    │  ├─页脚
    │  ├─页头
    │  ├─图标
    │  ├─加载中
    │  └─帖子列表
    ├─内容
    │  └─博客
    │      └─默认
    ├─布局
    ├─页面
    │  ├─关于
    │  ├─博客
    │  ├─分类
    │  │  └─[分类]
    │  ├─朋友
    │  └─标签
    │      └─[标签]
    ├─样式
    │  ├─博客
    │  │  └─发布
    │  ├─组件
    │  │  └─发布
    │  ├─发布
    │  └─标签
    └─实用程序
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

使用 `yarn run -h` 获取帮助

## 待办事项

- [ ] 响应式 (移动设备 ~ 笔记本 ~ 带鱼屏)
- [ ] 国际化

## 贡献 💡💬

如果你发现了任何问题或有任何建议，欢迎创建 [Issues](https://github.com/KraHsu/HsuBlog/issues) 或提交 [Pull Requests](https://github.com/KraHsu/HsuBlog/pulls)。

当然也可以通过[我的邮箱](mailto:charles040318@gmail.com)或QQ(1191393280)联系我。

## 许可证 📃🔏

本项目在MIT许可证下授权，版权所有©2023

---

由[枢衡KraHsu](https://blog.krahsu.top)用❤设计和构建
