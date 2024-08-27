//next - react
import Image from 'next/image';
import Link from 'next/link';
//components
import Card from '../../../components/card';
//helpers
import Images from '../../../helpers/slider/images';
import { formatTitle, truncateText } from '../../../helpers/functions';
//types
import { Content } from '../../../types/content';
import { LinkI } from '../../../public/icons/link';
import { PostNode, PostResponse } from '../../../types/posts';

export default function FullContent({
  posts,
  categoryLink,
  categoryName
}: {
  posts: PostResponse;
  categoryName: string;
  categoryLink: string;
}) {
  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  const listPosts: PostNode[] = posts.nodes.slice(1, 6);

  return (
    <Card>
      <div className="mb-8 mt-2 w-full border-b-2">
        <h2 className="mt-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
          <Link href={`/category/${categoryLink}`}>{categoryName}</Link>
        </h2>
      </div>
      <div className="flex h-auto w-full flex-col gap-[16px] md:h-[550px] md:flex-row">
        <Link
          href={posts.nodes[0].slug}
          className="groupA relative h-[375px] w-full overflow-hidden rounded md:h-[550px]"
        >
          <div className="groupA-hover absolute inset-0 z-[50]  bg-black/50">
            <LinkI className=" absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[36px] text-[#d6d6d6]" />
          </div>
          <Image
            src={posts.nodes[0].featuredImage.node.mediaDetails.sizes[0].sourceUrl}
            alt={posts.nodes[0].featuredImage.node.altText}
            loading="lazy"
            fill
            className="groupA-image w-full object-cover md:w-[50%]"
          />
          <div className=" absolute bottom-[24px]  left-[24px] z-[10] bg-black/50 px-2 py-[2px] text-[20px] text-white  md:text-[22px]">
            {posts.nodes[0].title}
          </div>
        </Link>
        <div className="flex h-[550px] w-full flex-col gap-[24px] rounded ">
          {listPosts.map((post: PostNode, i) => (
            <div
              className="relative flex h-[70px] min-h-[70px] flex-1  grow gap-[8px] md:h-auto"
              key={i}
            >
              <Link
                href={post.slug}
                className="groupA relative flex h-full w-[110px] min-w-[110px] items-start overflow-hidden rounded "
              >
                <div className="groupA-hover absolute inset-0 z-[50]  bg-black/30">
                  <LinkI className=" fade-in absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-[#d6d6d6] " />
                </div>
                <Image
                  src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                  alt={post.featuredImage.node.altText}
                  loading="lazy"
                  fill
                  className="groupA-image w-full rounded object-cover md:w-[50%]"
                />
              </Link>
              <div className=" grow   ">
                <Link
                  className="font-700 text-[14px] transition-all hover:text-[#0693e3]"
                  href={post.slug}
                >
                  <h2>{post.title}</h2>
                </Link>
                <span className="text-[12px]">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
