//next - react
import Image from 'next/image';
import Link from 'next/link';
//components
import Card from '../../../components/card';
//helpers
import images from '../../../helpers/slider/images';
import { formatTitle, truncateText } from '../../../helpers/functions';
//types
import { Content } from '../../../types/content';
import { DocumentI } from '../../../public/icons/document';
import { LinkI } from '../../../public/assets/slider/link';

export default function ListContent({ posts }: { posts: Content[] }) {
  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  const listPosts = posts.slice(1, 4);

  const truncatedTitle = truncateText(listPosts[0].title, 3);

  return (
    <Card>
      <div className="mb-8 mt-2 flex w-full items-center justify-between border-b-2">
        <h2 className="mt-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
          <Link
            href={formatTitle(listPosts[1].title)}
            className="overflow-hidde relative block text-ellipsis whitespace-nowrap"
          >
            {truncatedTitle}
          </Link>
        </h2>
        <DocumentI className="ml-auto text-[18.5px] text-[#b9bec3]" />
      </div>
      <div className="flex h-auto w-full flex-col gap-[16px] md:h-[650px]">
        <Link
          href={formatTitle(images[1].title)}
          className="groupA relative h-[375px] w-full overflow-hidden rounded md:h-[550px]"
        >
          <div className="groupA-hover absolute inset-0 z-[50]  bg-black/50">
            <LinkI className="absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[36px] text-[#d6d6d6]" />
          </div>
          <Image
            src={images[1].src}
            alt={images[1].alt}
            loading="lazy"
            fill
            className="groupA-image w-full object-cover md:w-[50%]"
          />
          <div className=" absolute bottom-[16px] left-[16px] z-[10] mr-[16px] overflow-hidden bg-black/50 px-2 py-[2px] text-[20px] text-white md:text-[22px]">
            {posts[1].title}
          </div>
        </Link>
        <div className="flex h-[550px] w-full flex-col gap-[24px] rounded ">
          {listPosts.map((post) => (
            <div
              className="flex h-[70px] min-h-[70px] flex-1  grow gap-[8px] md:h-auto"
              key={post.id}
            >
              <Link
                href={formatTitle(post.title)}
                className="groupA relative flex h-full w-[110px] min-w-[110px] items-start overflow-hidden rounded"
              >
                <div className="groupA-hover absolute inset-0 z-[50]  bg-black/30">
                  <LinkI className=" absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] text-[#d6d6d6]" />
                </div>
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  loading="lazy"
                  fill
                  className="groupA-image w-full rounded object-cover md:w-[50%]"
                />
              </Link>
              <Link
                href={formatTitle(post.title)}
                className="font-700 grow text-[14px] transition-all hover:text-[#0693e3]"
              >
                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
