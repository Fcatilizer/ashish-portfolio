"use server";

import fs from "fs";
import matter from "gray-matter";

export async function getBlogContent(slug: string) {
  const folder = "blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}
