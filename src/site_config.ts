export const SiteConfig: SiteConfig = {
  site: "https://demo.krahsu.top",
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
