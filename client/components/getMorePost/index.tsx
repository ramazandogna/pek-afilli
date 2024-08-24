import { useState } from "react";

export default function GetMorePost({}){

    const [postsLoading, setPostsLoading] = useState(false);

  const getMorePost = async () => {
    setPostsLoading(true);
    setTimeout(() => {
      setContents(posts.slice(0, firstContent + 5));
      setFirstContent(firstContent + 5);
      setPostsLoading(false);
    }, 1500);
  };

    return (
        <div
        onClick={getMorePost}
        className="mt-[25px] flex h-[45px] w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]"
      >
        {postsLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <ThreeDot className=" text-[40px] opacity-85" />
          </div>
        ) : (
          'Daha fazla göster'
        )}
      </div>
    )
}
