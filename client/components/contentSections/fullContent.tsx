import Image from 'next/image';
import Images from '../../helpers/slider/images';
import Link from 'next/link';
import Card from '../card';
import { ContentLinkIcon } from '../../icons/ContentLinkIcon';

export default function FullContent({ posts }: { posts: Content[] }) {
  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  function truncateText(text: string, wordLimit: number) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '..';
    }
    return text;
  }

  const listPosts = posts.slice(1, 6);
  const truncatedTitle = truncateText(listPosts[0].title, 3);

  return (
    <Card>
      <div className="mb-8 mt-2 w-full border-b-2">
        <h2 className="mt-4 inline-flex border-b-[3px] border-[#0693e3] pb-3 text-[18px] font-bold text-[#0693e3] transition-all hover:border-[#0061b1] hover:text-[#0061b1]">
          <Link href={listPosts[1].title.toLowerCase().replace(/\s+/g, '-')}>{truncatedTitle}</Link>
        </h2>
      </div>
      <div className="flex h-auto w-full flex-col gap-[16px] md:h-[550px] md:flex-row">
        <Link
          href={Images[1].title.toLowerCase().replace(/\s+/g, '-')}
          className="groupA relative h-[375px] w-full overflow-hidden rounded md:h-[550px]"
        >
          <div className="groupA-hover absolute inset-0 z-50  bg-black/30">
            <ContentLinkIcon className="absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[36px]" />
          </div>
          <Image
            src={Images[1].src}
            alt={Images[1].alt}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="groupA-image object-cover"
          />
          <div className=" absolute bottom-[24px]  left-[24px] z-10 bg-black/30 px-2 py-[2px] text-[20px] text-white  md:text-[22px]">
            {posts[1].title}
          </div>
        </Link>
        <div className="flex h-[550px] w-full flex-col gap-[24px] rounded ">
          {listPosts.map((post) => (
            <div
              className="relative flex h-[70px] min-h-[70px] flex-1  grow gap-[8px] md:h-auto"
              key={post.id}
            >
              <Link
                href={post.title.toLowerCase().replace(/\s+/g, '-')}
                className="groupA relative flex h-full w-[110px] min-w-[110px] items-start overflow-hidden rounded "
              >
                <div className="groupA-hover absolute inset-0 z-50  bg-black/30">
                  <ContentLinkIcon className="fade-in absolute left-[50%] top-[50%] z-[99] -translate-x-[50%] -translate-y-[50%] text-[24px] " />
                </div>
                <Image
                  src={Images[2].src}
                  alt={Images[2].alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  fill
                  className="groupA-image rounded object-cover"
                />
              </Link>
              <Link
                href={post.title.toLowerCase().replace(/\s+/g, '-')}
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
