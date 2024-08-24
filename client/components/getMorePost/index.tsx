'use client';
import { useState } from 'react';
import { PostNode, PostResponse } from '../../types/posts';
import { ThreeDot } from '../../public/icons/threeDot';
import getPostList from '../../lib/getAllPosts';

export default function GetMorePost({
  contents,
  setContents
}: {
  contents: PostResponse;
  setContents: (posts: PostResponse) => void;
}) {
  const [postsLoading, setPostsLoading] = useState(false);
  const [noMorePost, setNoMorePost] = useState(false);

  const getMorePost = async () => {
    if (postsLoading || noMorePost) return;

    setPostsLoading(true);
    console.log('contents', contents);
    const morePost = await getPostList(contents.pageInfo.endCursor);

    let updatePosts: PostResponse = {
      pageInfo: {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: ''
      },
      nodes: []
    };
    console.log(morePost, 'morePost');
    updatePosts.pageInfo = morePost.pageInfo;

    contents.nodes.map((node) => {
      updatePosts.nodes.push(node);
    });
    morePost.nodes.map((node) => {
      updatePosts.nodes.push(node);
    });

    setTimeout(() => {
      setPostsLoading(false);
      setContents(updatePosts);
    }, 500);

    if (morePost.pageInfo.hasNextPage) {
      setNoMorePost(false);
    } else {
      setNoMorePost(true);
    }
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
