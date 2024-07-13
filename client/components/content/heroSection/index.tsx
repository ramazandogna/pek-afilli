//next - react
import Image from 'next/image';
import React from 'react';
//components
import BreadCrumb from '../../../components/breadCrumb';
//helpers
import { formatDate } from '../../../helpers/functions';
//types
import { ImageType } from '../../../types/content';

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
            <div className="i-mdi:hot" /> Hot
          </div>
        ) : views && views >= 5000 ? (
          <div className="flex items-center justify-center gap-[4px] rounded bg-[#FF5733] px-[8px] py-[4px] text-white">
            <div className="i-pepicons-pop:raise-hand-circle-filled" /> Trend
          </div>
        ) : views && views >= 2000 ? (
          <div className="flex items-center justify-center gap-[4px] rounded bg-[#FFC000] px-[8px] py-[4px]">
            <div className="i-fluent-data-trending-16-filled"></div>
            Popular
          </div>
        ) : null}
      </div>

      <h2 className=" text-[24px] font-bold">{params.post}</h2>
      <div className="mb-[20px] flex flex-col gap-[8px] text-[12px] md:flex-row md:gap-0">
        <div className="flex items-center gap-[8px]">
          <span className="hidden font-bold md:flex"> &#183;</span>
          {time}
        </div>
        <div className="flex items-center gap-[12px] md:ml-auto">
          <span className="flex items-center  gap-[4px]">
            <div className="i-icon-park-twotone-comments" />
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
            <div className="i-mingcute:eye-fill" />
            <span>{views ? views : 0} Okuma</span>
          </span>
          <span className="flex items-center  gap-[4px]">
            <div className="i-material-symbols-bookmark-added-rounded"></div>
            <span>{readTime ? readTime : 0} dakika okuma süresi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
