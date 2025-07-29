// src/app/blog/[slug]/page.tsx

// Next.js imports for navigation and metadata
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

// Import data fetching utilities from your lib/markdown.ts file.
import { getPostData, getAllPostSlugs } from "@/lib/markdown";

// Import Next.js page props type
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// --- Type Definitions ---

/**
 * Defines the structure for generateStaticParams return
 */
interface SlugParam {
  slug: string;
}

/**
 * Defines the structure of an object containing slug parameters,
 * typically returned by `getAllPostSlugs` for `generateStaticParams`.
 */
interface SlugObject {
  params: SlugParam;
}

/**
 * Defines the expected structure of a blog post's data,
 * returned by `getPostData`.
 */
interface BlogPostData {
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  image?: string;
  content: string;
}

// --- Data Fetching and Static Path Generation ---

export async function generateStaticParams(): Promise<SlugParam[]> {
  const slugs: SlugObject[] = getAllPostSlugs();
  return slugs.map((slugObj) => ({ slug: slugObj.params.slug }));
}

// --- Metadata Generation ---

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPostData | undefined = await getPostData(slug);

  if (!post) {
    return {
      title: "Beitrag nicht gefunden",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

// --- Blog Post Page Component ---

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const post: BlogPostData | undefined = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mx-auto px-4 py-8 max-w-3xl">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

      {/* Post Meta Information (Date and Author) */}
      {post.author ? (
        <p className="text-sm text-gray-500 mb-6">
          {post.date} von <span className="font-medium">{post.author}</span>
        </p>
      ) : (
        <p className="text-sm text-gray-500 mb-6">
          {post.date}
        </p>
      )}

      {/* Optional Post Image */}
      {post.image && (
        <div className="mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-auto object-cover"
            priority
          />
        </div>
      )}

      {/* Blog Post Content */}
      <div
        className="prose-lg text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}