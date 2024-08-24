'use client';
//react - next
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
//styles
import styles from './slider.module.css';
//helpers
import { formatTitle } from '../../helpers/functions';
import { Eye } from '../../public/icons/eye';
import { Right } from '../../public/icons/right';
import { Left } from '../../public/icons/left';
//components
import { motion } from 'framer-motion';
import { PostResponse } from '../../types/posts';

export default function Slider({ posts }: { posts: PostResponse }) {
  const [currentImage, setCurrentImage] = useState(0);
  const image = posts.nodes[currentImage];
  const [fade, setFade] = useState(false);

  const nextImage = () => {
    const maxImages = posts.nodes.length - 1;
    currentImage < maxImages ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
  };

  const prevImage = () => {
    const maxImages = posts.nodes.length - 1;
    setTimeout(() => {
      currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(maxImages);
      setFade(false);
    }, 200);
  };

  const onDragStart = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);
  return (
    <div className={styles.sliderWrapper}>
      <Link href={image.slug}>
        <motion.span
          key={image.slug}
          initial={{ opacity: 0.75 }}
          animate={{ opacity: 0.95 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className="relative flex h-[359px] min-h-[359px] w-full overflow-hidden rounded"
        >
          <Image
            className="h-auto w-full max-w-full rounded  duration-500 ease-in-out"
            src={image.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
            alt={image.featuredImage.node.altText}
            priority
            width={718}
            height={359}
            onDragStart={onDragStart}
          />
        </motion.span>
        <motion.div
          key={currentImage}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className="absolute bottom-10 left-4 right-4 flex flex-col-reverse items-start justify-center gap-[4px]   text-white"
        >
          <h3 className="rounded bg-[#00000030] px-2 py-[2px] text-[22px] font-bold md:text-[32px]">
            {image.title}
          </h3>
          {/* <span className="flex items-center gap-[4px] text-[13px]">
            <Eye />
            {image.view}
          </span> */}
        </motion.div>
      </Link>

      <Left onClick={() => prevImage()} className={styles.leftIcon} />
      <Right onClick={() => nextImage()} className={styles.rightIcon} />
    </div>
  );
}
