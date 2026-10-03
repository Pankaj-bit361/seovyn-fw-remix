import { useLoaderData } from "react-router";
import { getPost } from "../posts.server";

export function loader({ params }) {
  const post = getPost(params.slug);
  if (!post) throw new Response("Not found", { status: 404 });
  return { post };
}

export const meta = ({ data }) => [{ title: `${data.post.title} | Fieldnote` }, { name: "description", content: data.post.summary }];

export default function Post() {
  const { post } = useLoaderData();
  return (
    <article>
      <h1>{post.title}</h1>
      <p className="meta">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
