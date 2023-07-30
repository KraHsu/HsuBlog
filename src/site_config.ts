export const SiteConfig: SiteConfig = {
  site: "https://foo.com/",
  title: "Hsu's Blog!",
  description: "这是一个个人博客",
  localSearch: true,
  markdownMath: false,
  i18n: {
    default: "en",
    languages: ["zh", "en"],
  },
};

interface SiteConfig {
  site: string;
  title: string;
  description: string;
  localSearch: boolean;
  markdownMath: "Katex" | "Mathjax" | false;
  i18n: {
    default: string;
    languages: string[];
  };
}
