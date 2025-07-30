import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/data/posts");

// Default-Bild, falls keins angegeben wurde
const defaultImage = "/images/Freibad_Niederkrüchten_Bahnen_2017-scaled.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  tags: string[];
};

// Hilfsfunktion: überprüft, ob der Dateiname gültig ist
function isValidPostFile(fileName: string): boolean {
  return fileName.endsWith(".md");
}

// Gibt alle vorhandenen Slugs zurück – für getStaticPaths
export function getAllPostSlugs(): { slug: string }[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter(isValidPostFile)
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

// Gibt die sortierten Blogposts zurück
export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter(isValidPostFile)
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      // Überspringe Posts ohne Slug oder Title
      if (!slug || typeof data.title !== "string") return null;

      return {
        slug,
        title: data.title ?? "Unbenannter Beitrag",
        date: data.date ?? "1970-01-01",
        excerpt: data.excerpt ?? "",
        content,
        image: data.image || defaultImage,
        author: data.author ?? "Unbekannt",
        tags: data.tags ?? [],
      };
    })
    .filter(Boolean) as BlogPost[];

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Einzelnen Post abrufen + Markdown zu HTML parsen
export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Markdown-Datei für Slug '${slug}' nicht gefunden.`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? "Unbenannter Beitrag",
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    content: contentHtml,
    image: data.image || defaultImage,
    author: data.author ?? "Unbekannt",
    tags: data.tags ?? [],
  };
}
