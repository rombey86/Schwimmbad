import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export function getSortedPostsData(): BlogPost[] {
  // Erstelle das Posts-Verzeichnis falls es nicht existiert
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  // Hole alle Dateinamen aus dem Posts-Verzeichnis
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Entferne ".md" vom Dateinamen um die ID zu erhalten
      const slug = fileName.replace(/\.md$/, '');

      // Lese die Markdown-Datei als String
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Verwende gray-matter um die Metadaten zu parsen
      const matterResult = matter(fileContents);

      // Kombiniere die Daten mit der ID
      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        image: matterResult.data.image || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
      } as BlogPost;
    });

  // Sortiere Posts nach Datum
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Verwende gray-matter um die Metadaten zu parsen
  const matterResult = matter(fileContents);

  // Verwende remark um Markdown zu HTML zu konvertieren
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Kombiniere die Daten mit der ID und dem konvertierten HTML
  return {
    slug,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    excerpt: matterResult.data.excerpt || '',
    content: contentHtml,
    image: matterResult.data.image || '',
    author: matterResult.data.author || '',
    tags: matterResult.data.tags || [],
  } as BlogPost;
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts.slice(0, limit);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.tags && post.tags.includes(tag)
  );
}