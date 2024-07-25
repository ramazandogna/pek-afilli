import React from 'react';
import { Content } from '../../../types/content';
import Card from '../../../components/card';
import Link from 'next/link';
import { formatTitle } from '../../../helpers/functions';

export default function CategoryContent({ posts }: { posts: Content[] }) {
  return (
    <Card>
      {posts.map((post, i: number) => (
        <div className="flex min-h-[100px] gap-[10px] p-[16px]" key={post.id}>
          <Link
            href={`/${formatTitle(post.title)}`}
            className="hidden flex-1 cursor-pointer items-center justify-center rounded text-[60px] shadow transition-all hover:rotate-1 hover:scale-105 hover:shadow-lg  md:flex"
          >
            {i}
          </Link>
          <div className="relative flex-[8]">
            <Link href={`/${formatTitle(post.title)}`}>
              <h2 className="mb-[16px] transition-all hover:text-[#0693e3]">{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </Card>
  );
}
