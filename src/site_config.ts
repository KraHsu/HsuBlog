export const SiteConfig: SiteConfig = {
  site: "https://foo.com/",
  title: "Hsu's Blog!",
  description: "这是一个个人博客",
  localSearch: true,
  markdownMath: false,
};

interface SiteConfig {
  site: string;
  title: string;
  description: string;
  localSearch: boolean;
  markdownMath: "Katex" | "Mathjax" | false;
}
