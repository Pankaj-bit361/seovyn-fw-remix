import { Link, useLoaderData } from "react-router";
import { getPosts } from "../posts.server";

export const meta = () => [{ title: "Blog | Fieldnote" }];
export const loader = () => ({ posts: getPosts() });

export default function Blog() {
  const { posts } = useLoaderData();
  return (
    <>
      <h1>Blog</h1>
      <ul className="posts">{posts.map((p) => <li key={p.slug}><Link to={`/blog/${p.slug}`}>{p.title}</Link> <span className="meta">{p.date}</span></li>)}</ul>
    </>
  );
}
