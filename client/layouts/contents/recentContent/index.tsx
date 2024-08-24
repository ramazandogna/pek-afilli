'use client';
//next - react
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
//helper
import images from '../../../helpers/slider/images';
import { motion } from 'framer-motion';
//components
import Card from '../../../components/card';
//types
import { Content } from '../../../types/content';
import { formatTitle } from '../../../helpers/functions';
import { LinkI } from '../../../public/icons/link';
import { ThreeDot } from '../../../public/icons/threeDot';
import { fadeInAnimation } from '../../../helpers/animations/fadeInAnimations';
import GetMorePost from '../../../components/getMorePost';
import { PostType } from '../../../types/post';

export default function RecentContent({ posts }: { posts: PostType[] }) {
  const [firstContent, setFirstContent] = useState<number>(5);
  const [contents, setContents] = useState<Content[]>();

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
          href={formatTitle(contents[1].title)}
          className="overflow-hidde relative block text-ellipsis whitespace-nowrap"
        >
          Recent Posts
        </Link>
      </h2>

      <div className="flex min-h-[550px] w-full flex-col gap-[24px] rounded">
        {contents.map((post, i) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={i}
            className=" flex grow flex-col md:h-[189px] md:min-h-[189px] md:flex-row md:gap-[8px]"
            key={post.id}
          >
            <Link
              href={formatTitle(post.title)}
              className="groupA relative flex h-[189px] min-h-[189px] items-start overflow-hidden  rounded md:w-[336px] md:min-w-[336px]"
            >
              <div className="groupA-hover absolute inset-0 z-[50]  bg-black/50">
                <LinkI className=" absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-[#d6d6d6]" />
              </div>
              <Image
                src={images[1].src}
                alt={images[1].alt}
                loading="lazy"
                fill
                className="groupA-image w-full rounded object-cover md:w-[50%]"
              />
            </Link>
            <Link
              href={formatTitle(post.title)}
              className="font-700 grow text-[14px] transition-all hover:text-[#0693e3] "
            >
              <h2>{post.title}</h2>
            </Link>
          </motion.div>
        ))}
      </div>
      <GetMorePost
    </Card>
  );
}
