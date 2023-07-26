import { Icons } from "@comp/icons/icon";
import { SiteConfig } from "./site_config";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { library, icon } from "@fortawesome/fontawesome-svg-core";

// library.add(faStar);
// const starIcon = icon({ prefix: "fas", iconName: "star" });

const today = new Date();

export const ThemeConfig: Configs = {
  site: {
    title: SiteConfig.title,
    favicon: "/favicon.png",
    logo: "/favicon.png",
    author: "枢衡KraHsu",
    localSearch: {
      enable: true,
      comment: "你可以使用类似 unix 的格式：[扩展搜索](/blog/lkk0v40t/)",
      hits: ["[扩展搜索](/blog/lkk0v40t/)", "[HelloWorld](/blog/lkk0fjvf/)"],
    },
    backgroundBubbles: 20,
  },
  head: [``],
  body: [``],
  header: {
    menu: [
      {
        name: "主页",
        customClass: "home",
        link: "/",
        icon: "local:solid.house",
      },
      {
        name: "博客",
        customClass: "articles",
        icon: "local:solid.pen-fancy",
        children: [
          {
            name: "分类",
            customClass: "categories",
            icon: "local:solid.hard-drive",
            link: "/categories",
          },
          {
            name: "标签",
            customClass: "tags",
            icon: "local:solid.tags",
            link: "/tags",
          },
        ],
      },
      {
        name: "我的",
        customClass: "mine",
        icon: Icons.IDcardIcon,
        children: [
          {
            name: "友链",
            customClass: "friends",
            icon: "local:solid.link",
            link: "./friends",
          },
        ],
      },
      {
        name: "关于",
        customClass: "about",
        link: "/about",
        icon: "local:solid.paper-plane",
      },
    ],
    buttons: [
      {
        icon: "local:solid.house",
        link: "",
        customClass: "",
        title: "返回主页",
      },
    ],
    functions: {
      headerLogo: "left",
      themeControl: true,
      pagePercent: true,
    },
  },
  aside: {
    authorInfo: {
      avatar: "/avatar.avif",
      description: "一个前端开发者，退役OIer，Robomaster菜鸟",
      socialMedias: [
        {
          link: "https://github.com/charles-hsuz",
          customClass: "github",
          icon: "local:brands.github",
          title: "github",
        },
        {
          link: "mailto:charles_hus@qq.com",
          customClass: "mail-qq",
          icon: "local:solid.envelope",
          title: "QQmail",
        },
        {
          link: "https://space.bilibili.com/86698256",
          customClass: "bilibili",
          icon: "local:brands.bilibili",
          title: "social-bili",
        },
        {
          link: "https://blog.csdn.net/CharlesHsuu",
          customClass: "csdn",
          icon: "local:solid.c",
          title: "social-csdn",
        },
      ],
    },
    announcement: {
      headline: "看公告啦！",
      content:
        "新主题试验中~ 欢迎各位[找茬](https://github.com/KraHsu/HsuBlog/issues)~",
    },
    siteInfo: {
      busuanzi: false,
      totalWordCounts: true,
      totalPostCounts: true,
    },
    customCards: [
      {
        // icon: `<i class="fa-solid fa-star"></i>`,
        icon: "local:solid.star",
        title: "推荐文章",
        content: "这里是自定义内容部分<br>啥都可以放",
      },
    ],
  },
  footer: {
    text: "Design & Build with ❤ by [枢衡KraHsu](/about)",
    copyright: `&copy; 2022-${today.getFullYear()} By [枢衡KraHsu](/about)`,
    // 也可以使用 {{}} 包裹函数体，并返回替换值
    // You can also use {{}} to wrap the function body and return the replacement value.
    // copyright: `&copy; 2022-{{const today = new Date();return today.getFullYear();}} By [枢衡KraHsu](/about)`,
  },
  homePage: {
    heroShoot: "/heroimg.jpg",
    heroTitle: "KraHsu's Blog",
    heroDescription: "A beautiful, customized, personal blog theme for Astro",
    defaultCover: "/heroimg.jpg",
    paginationSize: 10,
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: ["Announcement", "SiteInfo"],
      direct: "right",
    },
  },
  postPage: {
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: [],
    },
  },
  tagsPage: {
    floating: true,
  },
  comments: {
    // type: "twikoo",
    // options: {
    //   envId: "",
    //   lang: "zh-CN",
    // },
    // type: "waline",
    // options: {
    //   serverURL: "",
    // },
    type: false,
    options: null,
  },
};
