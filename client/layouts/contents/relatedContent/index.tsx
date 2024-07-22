import React from 'react';
import { Content } from '../../../types/content';
import Link from 'next/link';
import Image from 'next/image';
import { formatTitle } from '../../../helpers/functions';
import images from '../../../helpers/slider/images';

export default function RelatedContent({ relatedPosts }: { relatedPosts: Content[] }) {
  return (
    <div>
      <h2 className="my-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
        Related Posts
      </h2>
      <div className="flex flex-wrap">
        {relatedPosts.map((post, i) => (
          <div
            className="mb-4 flex w-full grow flex-col md:h-[189px] md:min-h-[189px] md:gap-[8px]"
            key={post.id}
          >
            <Link
              href={formatTitle(post.title)}
              className="groupA relative flex h-[189px] min-h-[189px] items-start overflow-hidden  rounded "
            >
              <div className="groupA-hover absolute inset-0 z-[50]  bg-black/50">
                <div className="i-line-md:link absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-[#d6d6d6]" />
              </div>
              <Image
                src={images[i].src}
                alt={images[i].alt}
                loading="lazy"
                fill
                className="groupA-image rounded object-cover"
              />
              <span className="font-700 absolute bottom-4 left-4 max-w-[90%] rounded bg-black/50 px-[8px] py-[4px] text-[14px] text-white transition-all hover:text-[#0693e3]">
                <h2>{post.title}</h2>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
