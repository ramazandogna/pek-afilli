import Date from '../../components/date';
import FeaturedImage from '../../components/featuredImage';
import getAllPosts from '../../lib/getAllPosts';
import { PostNode } from '../../types/posts';

export default async function Test() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.nodes.map((p: PostNode) => (
          <li className="my-2 flex bg-red-200" key={p.slug}>
            <FeaturedImage post={p} key={p.slug} />
            <div>
              <div>
                Published on <Date dateString={p.date} />
              </div>
              <div>{p.title}</div>
              <div>{p.slug}</div>
            </div>
            <div>
              {p.categories.nodes.map((c) => (
                <span key={c.slug}>{c.name}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
