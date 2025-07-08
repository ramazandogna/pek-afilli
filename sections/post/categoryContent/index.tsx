'use client';
//next - react
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//components
import Card from '../../../components/card';
import GetMorePost from '../../../components/getMorePost';
import { LinkI } from '../../../public/icons/link';
//types
import { PostResponse } from '../../../types/posts';
//motion
import { fadeInAnimation } from '../../../helpers/animations/fadeInAnimations';
import { motion } from 'framer-motion';
import { formatDateToLong } from '../../../helpers/functions';

export default function CategoryContent({
  posts,
  params
}: {
  posts: PostResponse;
  params: { category: string };
}) {
  const [contents, setContents] = useState<PostResponse>(posts);

  // Güvenli time hesaplama
  const time = posts.nodes[0]?.date ? formatDateToLong(posts.nodes[0].date) : '';

  const validPosts = contents.nodes.filter(
    (post) =>
      post &&
      post.date &&
      post.slug &&
      post.title &&
      post.featuredImage?.node?.mediaDetails?.sizes &&
      post.categories?.nodes?.length > 0
  );

  return (
    <Card>
      {validPosts.length === 0 ? (
        <div className="p-8 text-center text-gray-500">Bu kategoride uygun içerik bulunamadı.</div>
      ) : (
        validPosts.map((post, i) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
            className="flex min-h-[100px] flex-col gap-[10px] p-[16px] md:flex-row"
            key={i}
          >
            <Link
              href={`/${post.slug}`}
              className="groupA relative aspect-[16/9] w-full overflow-hidden rounded md:w-[336px] md:min-w-[336px]"
            >
              <div className="groupA-hover group-hoverA:opacity-100 absolute inset-0 z-[50] bg-black/80 opacity-0 transition-opacity">
                <LinkI className="absolute left-1/2 top-1/2 z-[99] -translate-x-1/2 -translate-y-1/2 text-[24px] text-white" />
              </div>
              <Image
                src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                loading="lazy"
                fill
                className="object-cover"
              />
            </Link>

            <div className="relative w-full md:w-[358px]">
              <Link href={`/${post.slug}`}>
                <h2 className="transition-all hover:text-[#0693e3]">{post.title}</h2>
              </Link>
              <span className="text-[12px]">{post.date ? formatDateToLong(post.date) : ''}</span>
            </div>
          </motion.div>
        ))
      )}
      {validPosts[0]?.categories?.nodes?.[0]?.name && (
        <GetMorePost
          taxonomy={{ key: validPosts[0].categories.nodes[0].name, value: params.category }}
          contents={contents}
          setContents={setContents}
        />
      )}
    </Card>
  );
}
