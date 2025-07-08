'use client';
import { useState } from 'react';
import { PostResponse } from '../../types/posts';
import { ThreeDot } from '../../public/icons/threeDot';

export default function GetMorePost({
  contents,
  setContents,
  taxonomy
}: {
  contents: PostResponse;
  setContents: (posts: PostResponse) => void;
  taxonomy: { key: string | null; value: string | null };
}) {
  const [postsLoading, setPostsLoading] = useState(false);
  const [noMorePost, setNoMorePost] = useState(false);

  const getMorePost = async () => {
    if (postsLoading || noMorePost) return;

    setPostsLoading(true);

    // API route üzerinden fetch ile veri çek
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: '', // Arama kelimesi gerekiyorsa ekle
        endCursor: contents.pageInfo.endCursor,
        taxonomy
      })
    });
    const morePost = await response.json();

    let updatePosts: PostResponse = {
      pageInfo: morePost.pageInfo,
      nodes: [...contents.nodes, ...morePost.nodes]
    };

    setTimeout(() => {
      setPostsLoading(false);
      setContents(updatePosts);
    }, 500);

    setNoMorePost(!morePost.pageInfo.hasNextPage);
  };

  return (
    <div
      onClick={getMorePost}
      className={`${postsLoading && 'cursor-not-allowed'} ${noMorePost && 'cursor-not-allowed opacity-50'} mt-[25px] flex h-[45px] w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]`}
    >
      {postsLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <ThreeDot className=" text-[40px] opacity-85" />
        </div>
      ) : (
        'Daha fazla göster'
      )}
    </div>
  );
}
