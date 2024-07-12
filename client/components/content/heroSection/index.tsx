//next - react
import Image from 'next/image';
import React from 'react';
//components
import BreadCrumb from '../../../components/breadCrumb';
//types
import { ImageType } from '../../../types/content';

export default function HeroSection({
  params,
  image
}: {
  params: { post: string };
  image: ImageType;
}) {
  return (
    <div className="flex flex-col gap-[30px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={720}
        height={360}
        className="mx-auto rounded object-cover"
        priority
      />
      <BreadCrumb name="Category 1" link="http://localhost:3000/auth/register" />
      <h2 className="mb-[20px] text-[24px] font-bold">{params.post}</h2>
    </div>
  );
}
