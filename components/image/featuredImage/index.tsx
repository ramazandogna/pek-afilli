import Image from 'next/image';
import Link from 'next/link';
import { PostNode } from '../../../types/posts';
import { getPlaiceholder } from 'plaiceholder';

export default async function FeaturedImage({ post }: { post: PostNode }) {
  const defaultFeaturedImage =
    'https://wp.pekafilli.com/wp-content/uploads/2024/08/Ekran-goruntusu-2024-08-17-143156-900x575.png';
  const defaultWidth = 300; // number
  const defaultHeight = 200; // number

  let img = {
    src: '',
    width: defaultWidth,
    height: defaultHeight
  };

  if (post.featuredImage) {
    const size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: 300,
      height: 200
    };
  } else {
    img.src = defaultFeaturedImage;
  }

  const buffer = await fetch(post.featuredImage.node.mediaDetails.sizes[0].sourceUrl).then(
    async (res) => {
      return Buffer.from(await res.arrayBuffer());
    }
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Link href={`/${post.slug}`}>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={post.title}
        placeholder="blur"
        blurDataURL={base64}
        loading="lazy"
        className="md:w-[50%]"
      />
    </Link>
  );
}
