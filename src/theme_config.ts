import { Icons } from "@comp/icons/icon";
import { SiteConfig } from "./site_config";

const today = new Date();

export const ThemeConfig: Configs = {
  site: {
    title: SiteConfig.title,
    favicon: "/favicon.png",
    logo: "/favicon.png",
    author: "枢衡KraHsu",
    localSearch: true,
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
        icon: Icons.HomeIcon,
      },
      {
        name: "博客",
        customClass: "articles",
        icon: Icons.PenIcon,
        children: [
          {
            name: "分类",
            customClass: "categories",
            icon: Icons.HardDriverIcon,
            link: "/categories",
          },
          {
            name: "标签",
            customClass: "tags",
            icon: Icons.TagsIcon,
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
            icon: Icons.LinkIcon,
            link: "./friends",
          },
        ],
      },
      {
        name: "关于",
        customClass: "about",
        link: "/about",
        icon: Icons.PaperPlaneIcon,
      },
    ],
    buttons: [
      {
        icon: Icons.HomeIcon,
        link: "",
        customClass: "",
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
      avatar: "/avatar.jpg",
      description: "一个前端开发者，退役OIer，Robomaster菜鸟",
      socialMedias: [
        {
          link: "https://github.com/charles-hsuz",
          customClass: "github",
          icon: Icons.GitHub,
        },
        {
          link: "mailto:charles_hus@qq.com",
          customClass: "mail-qq",
          icon: Icons.Mail,
        },
        {
          link: "https://space.bilibili.com/86698256",
          customClass: "bilibili",
          icon: Icons.Bilibili,
        },
        {
          link: "https://blog.csdn.net/CharlesHsuu",
          customClass: "csdn",
          icon: Icons.C,
        },
      ],
    },
    announcement: {
      headline: "看公告啦！",
      content: "新主题试验中~ 欢迎各位(找茬)[]~",
    },
    siteInfo: {
      busuanzi: true,
      totalWordCounts: true,
      totalPostCounts: true,
    },
    customCards: [
      {
        icon: `<i class="fa-solid fa-star"></i>`,
        title: "推荐文章",
        content: "这里是自定义内容部分<br>啥都可以放",
      },
    ],
  },
  footer: {
    text: "Design & Build with ❤ by (枢衡KraHsu)[/about]",
    copyright: `&copy; 2022-${today.getFullYear()} By (枢衡KraHsu)[/about]`,
    // 也可以使用 {{}} 包裹函数体，并返回替换值
    // You can also use {{}} to wrap the function body and return the replacement value.
    // copyright: `&copy; 2022-{{const today = new Date();return today.getFullYear();}} By (枢衡KraHsu)[/about]`,
  },
  homePage: {
    heroShoot: "/heroimg.webp",
    heroTitle: "枢衡の学习日志",
    heroDescription: "一只小乌鸦的学习日志",
    defaultCover: "/heroimg.webp",
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
    type: "waline",
    options: {
      serverURL: "",
    },
  },
};
