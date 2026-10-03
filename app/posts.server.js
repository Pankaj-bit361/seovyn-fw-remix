import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "posts");

export function getPosts() {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      return { slug: file.slice(0, -3), title: data.title, date: String(data.date ?? "").slice(0, 10), summary: data.summary ?? "" };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { slug, title: data.title, date: String(data.date ?? "").slice(0, 10), summary: data.summary ?? "", html: marked.parse(content) };
}
