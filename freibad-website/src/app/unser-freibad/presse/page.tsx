import React from "react";
import { getSortedPostsData, BlogPost } from "@/lib/markdown";

export const metadata = {
  title: "Presse - Freibad Niederkrüchten",
  description: "Alle Pressebeiträge und Neuigkeiten zum Freibad Niederkrüchten",
};

export default async function PressePage() {
  // Blogposts laden
  const posts: BlogPost[] = getSortedPostsData();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pressebeiträge</h1>

      {posts.length === 0 && (
        <p>Keine Pressebeiträge vorhanden.</p>
      )}

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-1">
              {new Date(post.date).toLocaleDateString("de-DE")} — {post.author}
            </p>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-w-md rounded mb-2"
                loading="lazy"
              />
            )}
            <p>{post.excerpt}</p>
            {/* Link zum Detailpost, z.B. /blog/[slug] */}
            <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Weiterlesen →
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
