export const SiteConfig: SiteConfig = {
  site: "",
  title: "枢衡の巢",
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
