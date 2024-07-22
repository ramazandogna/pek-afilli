'use client';
//react - next
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
//styles
import styles from './slider.module.css';
//helpers
import { formatTitle } from '../../helpers/functions';
import images from '../../helpers/slider/images';
import { Eye } from '../../public/icons/eye';
import { Right } from '../../public/icons/right';
import { Left } from '../../public/icons/left';
//components

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const image = images[currentImage];

  const nextImage = () => {
    const maxImages = images.length - 1;
    currentImage < maxImages ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
  };

  const prevImage = () => {
    const maxImages = images.length - 1;
    currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(maxImages);
  };

  const onDragStart = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);
  return (
    <div className={styles.sliderWrapper}>
      <Link href={formatTitle(image.title)}>
        <Image
          className="h-auto w-full max-w-full rounded bg-cover bg-center duration-500 ease-in-out"
          src={image.src}
          alt={image.alt}
          priority
          width={1000}
          height={500}
          onDragStart={onDragStart}
        />
        <div className="absolute bottom-10 left-4 right-4 flex flex-col-reverse items-start justify-center gap-[4px]   text-white">
          <h3 className="rounded bg-[#00000030] px-2 py-[2px] text-[22px] font-bold md:text-[32px]">
            {image.title}
          </h3>
          <span className="flex items-center gap-[4px] text-[13px]">
            <Eye />
            {image.view}
          </span>
        </div>
      </Link>

      <Left onClick={() => prevImage()} className={styles.leftIcon} />
      <Right onClick={() => nextImage()} className={styles.rightIcon} />
    </div>
  );
}
