import fs from "node:fs";

// Static hosting (GitHub Pages): no server, every page rendered at build time.
export default {
  ssr: false,
  basename: "/seovyn-fw-remix/",
  async prerender() {
    const slugs = fs.readdirSync("posts").filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3));
    return ["/", "/about", "/blog", "/sitemap.xml", ...slugs.map((slug) => `/blog/${slug}`)];
  },
};
