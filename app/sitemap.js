import { site } from '@/lib/site.config';

export default function sitemap() {
  return [
    {
      url: site.seo.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
