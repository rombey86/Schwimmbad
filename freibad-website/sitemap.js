import fs from 'fs';
import path from 'path';
import { siteConfig } from './src/data/config.js'; // .js extension needed for ES modules

async function generateSitemap() {
  const baseUrl = siteConfig.url;
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/buergerentscheid`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/petition`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/unterstuetzen`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/presse`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/unser-freibad`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/unser-freibad/galerie`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/unser-freibad/chronik`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/unser-freibad/fakten-zahlen`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const postsDirectory = path.join(process.cwd(), 'src', 'data', 'posts'); // Fixed path here
  const postFiles = fs.readdirSync(postsDirectory);

  const blogRoutes = postFiles.map((file) => {
    const slug = file.replace(/\.md$/, '');
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    };
  });

  const allRoutes = [...staticRoutes, ...blogRoutes];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach((route) => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${route.url}</loc>\n`;
    sitemapXml += `    <lastmod>${route.lastModified}</lastmod>\n`;
    sitemapXml += `    <changefreq>${route.changeFrequency}</changefreq>\n`;
    sitemapXml += `    <priority>${route.priority}</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  sitemapXml += `</urlset>\n`;

  const publicDirectory = path.join(process.cwd(), 'public'); // Fixed path here
  if (!fs.existsSync(publicDirectory)) {
    fs.mkdirSync(publicDirectory, { recursive: true }); // Added recursive option
  }

  fs.writeFileSync(path.join(publicDirectory, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('Sitemap generated successfully!');
}

generateSitemap();