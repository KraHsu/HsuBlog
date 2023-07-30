export const SiteConfig: SiteConfig = {
  site: "https://hsublog.pages.dev",
  title: "HsuBlog",
  description: "HsuBlog Demo 页面",
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
