import React from 'react';
import { Content } from '../../../types/content';
import Link from 'next/link';
import Image from 'next/image';
import { formatTitle } from '../../../helpers/functions';
import images from '../../../helpers/slider/images';
import { LinkI } from '../../../public/icons/link';
import { PostNode, PostResponse } from '../../../types/posts';
import { getPlaiceholder } from 'plaiceholder';

const SUPPORTED_IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function isSupportedImageFormat(src: string) {
  return SUPPORTED_IMAGE_FORMATS.some((ext) => src.toLowerCase().endsWith(ext));
}

export default async function RelatedContent({ relatedPosts }: { relatedPosts: PostResponse }) {
  let base64: string | undefined;
  const src = relatedPosts.nodes[0].featuredImage.node.mediaDetails.sizes[0].sourceUrl;
  if (isSupportedImageFormat(src)) {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch image: ${src}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      const result = await getPlaiceholder(buffer);
      base64 = result.base64;
    } catch (error) {
      console.warn('Could not generate blur placeholder:', error);
    }
  }

  return (
    <div>
      <h2 className="my-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
        Related Posts
      </h2>
      <div className="flex flex-wrap">
        {relatedPosts.nodes.map((post, i) => (
          <div
            className="mb-4 flex w-full grow flex-col md:h-[189px] md:min-h-[189px] md:gap-[8px]"
            key={post.slug}
          >
            <Link
              href={post.slug}
              className="groupA relative flex h-[189px] min-h-[189px] items-start overflow-hidden  rounded "
            >
              <div className="groupA-hover absolute inset-0 z-[50]  bg-black/50">
                <LinkI className="absolute left-[50%] top-[50%] z-[99] h-[24px] w-[24px] -translate-x-[50%] -translate-y-[50%] text-[#d6d6d6]" />
              </div>
              <Image
                src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                alt={post.featuredImage.node.altText}
                placeholder={base64 ? 'blur' : 'empty'}
                blurDataURL={base64}
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
