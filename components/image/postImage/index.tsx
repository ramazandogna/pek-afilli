import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import path from 'path';

const SUPPORTED_IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function isSupportedImageFormat(src: string) {
  return SUPPORTED_IMAGE_FORMATS.some((ext) => src.toLowerCase().endsWith(ext));
}

export default async function PostImage({
  src,
  alt,
  width,
  height,
  layout
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: string;
}) {
  let base64: string | undefined;

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
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder={base64 ? 'blur' : 'empty'}
      blurDataURL={base64}
      loading="lazy"
      className="rounded"
    />
  );
}
