"use server";

import fs from "fs";
import matter from "gray-matter";

export interface BlogMetadata {
  title: string;
  date: string;
  slug: string;
}


export async function getBlogMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    } as BlogMetadata;
  });
  return posts;
}
