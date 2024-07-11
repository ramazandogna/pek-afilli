'use client';
import { Content } from '../../types/content';
import Card from '../card';
import images from '../../helpers/slider/images';

import { ContentLinkIcon } from '../../icons/ContentLinkIcon';
import Image from 'next/image';
import Link from 'next/link';
import { fetchPosts } from '../../helpers/apis/fetchs';
import { useState } from 'react';

export default function RecentContent({ posts }: { posts: Content[] }) {
  const [firstContent, setFirstContent] = useState<number>(5);
  const [contents, setContents] = useState<Content[]>(posts.slice(0, firstContent));
  const getMorePost = async () => {
    setContents(posts.slice(0, firstContent + 5));
    setFirstContent(firstContent + 5);
  };

  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="mb-8  mt-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
        <Link
          href={contents[1].title.toLowerCase().replace(/\s+/g, '-')}
          className="overflow-hidde relative block text-ellipsis whitespace-nowrap"
        >
          Recent Posts
        </Link>
      </h2>

      <div className="flex min-h-[550px] w-full flex-col gap-[24px] rounded">
        {contents.map((post) => (
          <div className="flex h-[189px] min-h-[189px] grow gap-[8px] md:h-auto" key={post.id}>
            <Link
              href={post.title.toLowerCase().replace(/\s+/g, '-')}
              className="groupA relative flex h-[189px] min-h-[189px] w-[336px] min-w-[336px]  items-start overflow-hidden rounded"
            >
              <div className="groupA-hover absolute inset-0 z-50  bg-black/50">
                <ContentLinkIcon className="absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px]" />
              </div>
              <Image
                src={images[1].src}
                alt={images[1].alt}
                loading="lazy"
                layout="fill"
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
                fill
                className="groupA-image rounded object-cover"
              />
            </Link>
            <Link
              href={post.title.toLowerCase().replace(/\s+/g, '-')}
              className="font-700 grow text-[14px] transition-all hover:text-[#0693e3]"
            >
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div
        onClick={getMorePost}
        className="mt-[25px] flex w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]"
      >
        Daha Fazla Yükle
      </div>
    </Card>
  );
}
