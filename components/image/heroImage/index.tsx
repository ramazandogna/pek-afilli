import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';

export default async function HeroImage({
  alt,
  src,
  width,
  height
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const defaultFeaturedImage =
    'https://wp.pekafilli.com/wp-content/uploads/2024/08/Ekran-goruntusu-2024-08-17-143156-900x575.png';
  const defaultWidth = 718; // number
  const defaultHeight = 359; // number

  let img = {
    src: '',
    width: defaultWidth,
    height: defaultHeight
  };

  if (src) {
    img = {
      src: src,
      width: width,
      height: height
    };
  } else {
    img.src = defaultFeaturedImage;
  }

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
      className="mx-auto overflow-hidden rounded object-cover transition-transform duration-500 ease-in-out hover:scale-105"
    />
  );
}
