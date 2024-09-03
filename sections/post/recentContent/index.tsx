'use client';
//next - react
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
//helper
import images from '../../../helpers/slider/images';
//components
import Card from '../../../components/card';
import { LinkI } from '../../../public/icons/link';
import GetMorePost from '../../../components/getMorePost';
//types
import { PostResponse } from '../../../types/posts';
//motion
import { fadeInAnimation } from '../../../helpers/animations/fadeInAnimations';
import { motion } from 'framer-motion';

export default function RecentContent({ posts }: { posts: PostResponse }) {
  const [contents, setContents] = useState<PostResponse>(posts);

  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/20">
          <span className=" animate-ping">Loading...</span>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="mb-8  mt-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
        <Link
          href={'/recent'}
          className="overflow-hidde relative block text-ellipsis whitespace-nowrap"
        >
          Recent Posts
        </Link>
      </h2>

      <div className="flex min-h-[550px] w-full flex-col gap-[24px] rounded">
        {contents.nodes.map((post, i) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={i}
            className=" flex grow flex-col md:h-[189px] md:min-h-[189px] md:flex-row md:gap-[16px]"
            key={i}
          >
            <Link
              href={post.slug}
              className="groupA relative flex h-[189px] min-h-[189px] items-start overflow-hidden  rounded md:w-[336px] md:min-w-[336px]"
            >
              <div className="groupA-hover relative inset-0 z-[50]  bg-black/50">
                <LinkI className=" absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-[#d6d6d6]" />
              </div>
              <Image
                src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                alt={post.featuredImage.node.altText}
                loading="lazy"
                fill
                className="groupA-image w-full rounded object-cover md:w-[50%]"
              />
            </Link>
            <div className="font-700 grow">
              <Link href={post.slug} className="text-[16px] transition-all hover:text-[#0693e3]">
                <h2>{post.title}</h2>
              </Link>
              <div className="flex gap-2 text-[12px]">
                <Link
                  className="transition-all hover:text-[#0693e3]"
                  href={`/category/${post.categories.nodes[0].slug}`}
                >
                  <div>{post.categories.nodes[0].name}</div>
                </Link>
                <div>{post.date}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <GetMorePost
        taxonomy={{ key: null, value: null }}
        contents={contents}
        setContents={setContents}
      />
    </Card>
  );
}
