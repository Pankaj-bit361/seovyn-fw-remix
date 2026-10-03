import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("blog", "routes/blog.jsx"),
  route("blog/:slug", "routes/post.jsx"),
  route("sitemap.xml", "routes/sitemap.js"),
];
