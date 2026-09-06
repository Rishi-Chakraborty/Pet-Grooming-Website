import { site } from '@/lib/site.config';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.seo.url}/sitemap.xml`,
  };
}
