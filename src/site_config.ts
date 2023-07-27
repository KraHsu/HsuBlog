export const SiteConfig: SiteConfig = {
  site: "https://hsublog.pages.dev",
  title: "HsuBlog",
  description: "HsuBlog Demo 页面",
  localSearch: true,
  markdownMath: "Katex",
};

interface SiteConfig {
  site: string;
  title: string;
  description: string;
  localSearch: boolean;
  markdownMath: "Katex" | "Mathjax" | false;
}
