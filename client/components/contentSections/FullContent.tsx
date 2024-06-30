import Image from 'next/image';
import Card from '../card';
import Images from '../../helpers/slider/images';

export default function Home({ posts }: { posts: any[] }) {
  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  console.log(posts[1].title);

  return (
    <Card>
      <div className="flex h-[550px] w-full flex-col gap-[16px] md:flex-row">
        <div className="relative h-[550px] w-full overflow-hidden rounded">
          <Image
            src={Images[1].src}
            alt={Images[1].alt}
            loading="lazy"
            layout="fill"
            className="object-cover"
          />
          <div className=" absolute z-10">{posts[1].title}</div>
        </div>
        <div className="flex h-[550px] w-full flex-col gap-[24px] rounded ">
          {posts.map((post) => (
            <div className="flex h-[110px] flex-1 grow gap-[8px]" key={post.id}>
              <div className="relative flex h-full w-1/4 items-start rounded">
                <Image
                  src={Images[2].src}
                  alt={Images[2].alt}
                  loading="lazy"
                  layout="fill"
                  className="rounded object-cover"
                />
              </div>
              <h2 className="font-700 w-full text-[14px]">{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
