export const SiteConfig: SiteConfig = {
  site: "https://foo.com/",
  title: "Hsu's Blog!",
  description: "",
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
