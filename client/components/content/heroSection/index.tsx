//next - react
import Image from 'next/image';
import React from 'react';
//components
import BreadCrumb from '../../../components/breadCrumb';
//helpers
import { formatDate } from '../../../helpers/functions';
//types
import { ImageType } from '../../../types/content';
import { CommentsIcon } from '../../../icons/CommentsIcon';
import { EyeIcon } from '../../../icons/EyeIcon';
import { BookmarkIcon } from '../../../icons/BookmarkIcon';
import { PopularIcon } from '../../../icons/PopularIcon';
import { HotIcon } from '../../../icons/HotIcon';
import { TrendIcon } from '../../../icons/TrendIcon';

export default function HeroSection({
  params,
  image,
  comments,
  views,
  readTime
}: {
  params: { post: string };
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
          <div className="flex items-center justify-center gap-[4px] rounded bg-[#f11e1e] px-[8px] py-[4px] text-white">
            <HotIcon /> Hot
          </div>
        ) : views && views >= 5000 ? (
          <div className="flex items-center justify-center gap-[4px] rounded bg-[#FF5733] px-[8px] py-[4px] text-white">
            <TrendIcon /> Trend
          </div>
        ) : views && views >= 2000 ? (
          <div className="flex items-center justify-center gap-[4px] rounded bg-[#FFC000] px-[8px] py-[4px]">
            <PopularIcon /> Popular
          </div>
        ) : null}
      </div>

      <h2 className=" text-[24px] font-bold">{params.post}</h2>
      <div className="mb-[20px] flex text-[12px]">
        <li>{time}</li>
        <div className="ml-auto flex items-center gap-[12px]">
          <span className="flex items-center  gap-[4px]">
            <CommentsIcon />
            {comments ? comments : 0}
          </span>
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
            <EyeIcon />
            <span>{views ? views : 0} Okuma</span>
          </span>
          <span className="flex items-center  gap-[4px]">
            <BookmarkIcon />
            <span>{readTime ? readTime : 0} dakika okuma süresi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
