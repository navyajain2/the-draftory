import { MetadataRoute } from "next";
import { blog } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = blog.posts.map((post) => ({
    url: `https://thedraftory.com/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://thedraftory.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://thedraftory.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://thedraftory.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
