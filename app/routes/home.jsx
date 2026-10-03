import { Link, useLoaderData } from "react-router";
import { getPosts } from "../posts.server";

export const meta = () => [{ title: "Fieldnote" }, { name: "description", content: "Simple time tracking and invoicing for freelancers" }];
export const loader = () => ({ posts: getPosts().slice(0, 6) });

export default function Home() {
  const { posts } = useLoaderData();
  return (
    <>
      <h1>Fieldnote</h1>
      <p className="tagline">Simple time tracking and invoicing for freelancers</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Fieldnote is a time tracker for freelancers and small studios. Start a timer from your menu bar, tag the client and project, and turn tracked hours into an invoice in two clicks.</p><p>It works on Mac, Windows and the web, syncs between devices, and exports to CSV for your accountant.</p>" }} />
      <h2>From the blog</h2>
      <ul className="posts">{posts.map((p) => <li key={p.slug}><Link to={`/blog/${p.slug}`}>{p.title}</Link></li>)}</ul>
    </>
  );
}
