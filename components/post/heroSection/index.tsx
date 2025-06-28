//next - react
import Image from 'next/image';
import React from 'react';
//components
import BreadCrumb from '../../../components/breadCrumb';
//helpers
import { formatDate, unFormatTitle } from '../../../helpers/functions';
//types
import { ImageType } from '../../../types/content';
import { Comments } from '../../../public/icons/comments';
import { Eye } from '../../../public/icons/eye';
import { Read } from '../../../public/icons/read';
import Link from 'next/link';
import { Author, FeaturedImage } from '../../../types/post';
import { AuthorNode, CategoryNode } from '../../../types/posts';
import HeroImage from '../../image/heroImage';
import { Pencil } from '../../../public/icons/pencil';

export default function HeroSection({
  title,
  image,
  comments,
  author,
  readTime,
  category,
  date,
  slug
}: {
  title: string;
  image: FeaturedImage;
  comments?: number;
  readTime: number;
  category: CategoryNode;
  date: string;
  author: AuthorNode;
  slug: string;
}) {
  const formatDateToLong = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const time = formatDateToLong(date);
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex w-full overflow-hidden md:h-[358px]">
        <HeroImage
          src={image.node.mediaDetails.sizes[0].sourceUrl}
          alt={image.node.mediaDetails.sizes[0].sourceUrl}
          height={359}
          width={718}
        />
      </div>

      <BreadCrumb
        categoryLink={`/category/${category.slug}`}
        categoryName={category.name}
        postSlug={`/${slug}`}
        postTitle={title}
      />

      <h2 id="h2" className=" text-[24px] font-bold">
        {title}
      </h2>
      <div className="mb-[20px] flex flex-row  gap-[8px] text-[12px] md:gap-0">
        <div className="flex items-center gap-[8px]">
          <span className="flex items-center gap-[4px]">
            <Pencil />
            <span>{author.name}</span>
          </span>
          <span className="flex items-center gap-[4px]">
            <span className="hidden font-bold md:flex"> &#183;</span>
            {time}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-[12px]">
          <Link href="#1" className="flex items-center  gap-[4px]">
            <Comments />
            {comments ? comments : 0}
          </Link>

          <span className="flex items-center  gap-[4px]">
            <Read />
            <span>{readTime ? readTime : 0} dakika okuma süresi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
