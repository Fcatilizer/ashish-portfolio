"use client";

import { BlogMetadata } from "@/lib/getBlogSlugs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BlogLinksProps {
  blogs: BlogMetadata[];
}

const BlogLinks = ({ blogs }: BlogLinksProps) => {
  const pathname = usePathname();
  const isActive = (slug: string) => pathname.includes(slug);

  return blogs
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map((blog) => (
      <Link
        href={`/blog/${blog.slug}`}
        className={`hover:underline line-clamp-1 text-label-large text-on-surface-variant ${isActive(blog.slug) ? "font-semibold" : ""}`}
        key={blog.slug}
      >
        {blog.title}
      </Link>
    ));
};

export default BlogLinks;
