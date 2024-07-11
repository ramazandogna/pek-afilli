import Image from 'next/image';
import React from 'react';
import BreadCrumb from '../../../components/breadCrumb';
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
        width={784}
        height={392}
        className="mx-auto rounded object-cover"
      ></Image>
      <BreadCrumb />
      <h2 className="mb-[20px] text-[24px] font-bold">{params.post}</h2>
    </div>
  );
}
