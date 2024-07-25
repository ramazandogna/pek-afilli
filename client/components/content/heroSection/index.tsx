//next - react
import Image from 'next/image';
import React from 'react';
//components
import BreadCrumb from '../../../components/breadCrumb';
//helpers
import { formatDate, unFormatTitle } from '../../../helpers/functions';
//types
import { ImageType } from '../../../types/content';
import { Hot, Popular, Trending } from '../../../public/icons/hot';
import { Comments } from '../../../public/icons/comments';
import { Eye } from '../../../public/icons/eye';
import { Read } from '../../../public/icons/read';
import Link from 'next/link';

export default function HeroSection({
  title,
  image,
  comments,
  views,
  readTime
}: {
  title: string;
  image: ImageType;
  comments?: number;
  views?: number;
  readTime: number;
}) {
  const today = new Date();
  const time = formatDate(today);
  return (
    <div className="flex flex-col gap-[8px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={720}
        height={360}
        className="mx-auto rounded object-cover"
        priority
      />
      <BreadCrumb name="Category 1" link="http://localhost:3000/auth/register" />

      <div className="flex text-[13px]">
        {views && views >= 10000 ? (
          <Link
            className="flex cursor-pointer items-center justify-center gap-[4px] rounded bg-[#f11e1e] px-[8px] py-[4px] text-white shadow-sm"
            href="#h2"
          >
            <Hot /> Hot
          </Link>
        ) : views && views >= 5000 ? (
          <Link
            className="flex cursor-pointer items-center justify-center gap-[4px] rounded bg-[#FF5733] px-[8px] py-[4px] text-white shadow-sm"
            href="#h2"
          >
            <Trending /> Trend
          </Link>
        ) : views && views >= 2000 ? (
          <Link
            className="flex cursor-pointer items-center justify-center gap-[4px] rounded bg-[#FFC000] px-[8px] py-[4px] shadow-sm"
            href="#h2"
          >
            <Popular />
            Popular
          </Link>
        ) : null}
      </div>

      <h2 id="h2" className=" text-[24px] font-bold">
        {title}
      </h2>
      <div className="mb-[20px] flex flex-col gap-[8px] text-[12px] md:flex-row md:gap-0">
        <div className="flex items-center gap-[8px]">
          <span className="hidden font-bold md:flex"> &#183;</span>
          {time}
        </div>
        <div className="flex items-center gap-[12px] md:ml-auto">
          <Link href="#1" className="flex items-center  gap-[4px]">
            <Comments />
            {comments ? comments : 0}
          </Link>
          <span
            className={` 
            ${
              views && views >= 10000
                ? 'text-[#f11e1e]'
                : views && views >= 5000
                  ? 'text-[#FF5733]'
                  : 'text-[#333]'
            }
            flex items-center  gap-[4px]`}
          >
            <Eye />
            <span>{views ? views : 0} Okuma</span>
          </span>
          <span className="flex items-center  gap-[4px]">
            <Read></Read>
            <span>{readTime ? readTime : 0} dakika okuma süresi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
