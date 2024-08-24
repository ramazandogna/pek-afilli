import Image from 'next/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';

export default async function PostImage({
  src,
  alt,
  layout,
  width,
  height
}: {
  src: string;
  alt: string;
  layout: string;
  width: number;
  height: number;
}) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      loading="lazy"
      className="rounded"
    />
  );
}
