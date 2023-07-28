/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Configs {
  site: Site;
  head: string[];
  body: string[];
  header: Header;
  footer: Footer;
  aside: Aside;
  homePage: HomePageConfig;
  postPage: PostPageConfig;
  tagsPage: TagsPageConfig;
  comments: CommentConfig;
}

interface PostPageConfig {
  aside: AsideConfig;
}

interface ButtonItem {
  customClass?: string;
  link?: string;
  icon: Function | string;
  title?: string;
}

interface MenuItem extends ButtonItem {
  name: string;
  children?: MenuItem[];
}

interface HeaderFunc {
  themeControl: boolean;
  headerLogo: "left" | "right" | false;
  pagePercent: boolean;
}

interface HomePageConfig {
  heroShoot: string | false;
  heroTitle: string;
  heroDescription: string;
  defaultCover: string;
  paginationSize: number;
  aside: AsideConfig;
}

interface AuthorInfo {
  avatar: string;
  description: string;
  socialMedias: ButtonItem[];
}

interface Announcement {
  headline: string;
  content: string;
}

interface SiteInfo {
  busuanzi: boolean;
  totalWordCounts: boolean;
  totalPostCounts: boolean;
}

interface Header {
  menu: MenuItem[];
  buttons: ButtonItem[];
  functions: HeaderFunc;
}

interface Footer {
  text: string;
  copyright: string;
}

interface Aside {
  authorInfo: AuthorInfo;
  announcement: Announcement;
  siteInfo: SiteInfo;
  customCards: CustomCard[];
}

interface CustomCard {
  icon: string | any;
  title: string;
  content: string;
  customClass?: string;
}

interface Site {
  title: string;
  favicon: string;
  logo: string;
  author: string;
  localSearch: {
    enable: boolean;
    comment: string;
    hits: string[];
  };
  backgroundBubbles: number | false;
  themeColor: string;
}

interface AsideConfig {
  comps: AsideComponents[];
  stickyComps: AsideComponents[];
  direct?: "left" | "right";
}

type AsideComponents = "Announcement" | "AuthorInfo" | "BlogToc" | "SiteInfo";

interface TagsPageConfig {
  floating: boolean;
}

// 评论相关类型
interface TwikooCommentConfig {
  type: "twikoo";
  options: {
    envId: string;
    lang: string;
  };
}

interface WalineCommentConfig {
  type: "waline";
  options: {
    serverURL: string;
  };
}

interface ValineCommentConfig {
  type: "valine";
  options: {
    appKey: string;
    appId: string;
  };
}

interface NoCommentConfig {
  type: false;
  options: null;
}

type CommentConfig =
  | TwikooCommentConfig
  | WalineCommentConfig
  | NoCommentConfig
  | ValineCommentConfig;
