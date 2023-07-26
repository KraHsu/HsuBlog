import rss from '@astrojs/rss';
import {
  getCollection
} from 'astro:content';
import {
  SiteConfig
} from '../site_config';

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SiteConfig.title,
    description: SiteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.data.abbrlink || post.slug}/`,
    })),
  });
}