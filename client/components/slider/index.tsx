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

  const changeImage = (index: number) => {
    setCurrentImage(index);
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
          className={styles.image}
          src={image.src}
          alt={image.alt}
          priority
          width={1000}
          height={500}
          onDragStart={onDragStart}
        />
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{image.title}</h3>
          <p className={styles.view}>
            <div className="i-mingcute:eye-fill" />
            {image.view}
          </p>
        </div>
      </Link>

      <div onClick={() => prevImage()} className={`${styles.leftIcon} i-icon-park-outline:left`} />
      <div
        onClick={() => nextImage()}
        className={`${styles.rightIcon} i-ant-design:right-outlined`}
      />

      <div className={styles.dottes}>
        {images.map((s, i) => (
          <div
            onClick={() => {
              changeImage(i);
            }}
            key={i}
            className={`${currentImage === i ? styles.active : ''} ${styles.dot} i-mdi:dot`}
          />
        ))}
      </div>
    </div>
  );
}
