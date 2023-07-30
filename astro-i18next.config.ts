/** @type {import('astro-i18next').AstroI18nextConfig} */
import { SiteConfig } from "./src/site_config";
export default {
  defaultLocale: SiteConfig.i18n.default,
  locales: SiteConfig.i18n.languages,
};
