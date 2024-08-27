'use client';
import React, { useState } from 'react';
import { Content } from '../../../types/content';
import Card from '../../../components/card';
import Link from 'next/link';
import { formatTitle } from '../../../helpers/functions';
import { PostResponse } from '../../../types/posts';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../../helpers/animations/fadeInAnimations';
import Image from 'next/image';
import { LinkI } from '../../../public/icons/link';
import GetMorePost from '../../../components/getMorePost';

export default function CategoryContent({
  posts,
  params
}: {
  posts: PostResponse;
  params: { category: string };
}) {
  const [contents, setContents] = useState<PostResponse>(posts);
  return (
    <Card>
      {contents.nodes.map((post, i: number) => (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          custom={i}
          className="flex min-h-[100px] gap-[10px] p-[16px]"
          key={i}
        >
          <Link
            href={`/${post.slug}`}
            className="groupA relative flex h-[189px] min-h-[189px] items-start overflow-hidden  rounded md:w-[336px] md:min-w-[336px]"
          >
            <div className="groupA-hover absolute inset-0 z-[50]  bg-black/80">
              <LinkI className=" absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-white" />
            </div>
            <Image
              src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
              alt={post.featuredImage.node.altText}
              loading="lazy"
              fill
              className="groupA-image w-full rounded object-cover md:w-[50%]"
            />
          </Link>
          <div className="relative w-[358px]">
            <Link href={`/${post.slug}`}>
              <h2 className=" transition-all hover:text-[#0693e3]">{post.title}</h2>
            </Link>
            <span className="text-[12px]">{post.date}</span>
          </div>
        </motion.div>
      ))}
      <GetMorePost
        taxonomy={{ key: contents.nodes[0].categories.nodes[0].name, value: params.category }}
        contents={contents}
        setContents={setContents}
      />
    </Card>
  );
}
