'use client';
import React, { useState } from 'react';
import { Comment } from '../../types/comments';
import PekAfilli from '../../public/pek-afilli.svg';
import Image from 'next/image';
import { truncateText } from '../../helpers/functions';
import { title } from 'process';

export default function Comments({ comments }: { comments: Comment[] }) {
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [firstComment, setFirstComment] = useState<number>(5);
  const [getComments, setGetComments] = useState<Comment[]>(comments.slice(0, firstComment));
  const [commentLoading, setCommentLoading] = useState(false);

  const getMoreComment = async () => {
    setCommentLoading(true);
    setTimeout(() => {
      setGetComments(comments.slice(0, firstComment + 5));
      setFirstComment(firstComment + 5);
      setCommentLoading(false);
    }, 2500);
  };

  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    } else {
      setLiked(true);
      setLike(like + 1);
    }
  };

  return (
    <div className="gap-16px flex flex-col rounded bg-white p-4">
      {getComments.map((comment, i) => (
        <div className="md:gap-12px flex" key={i}>
          <div className="md:w-36px min-w-42px w-42px md:min-w-36px">
            <Image
              src={PekAfilli}
              width={24}
              height={24}
              alt="logo"
              className="md:w-24px w-36px h-36px md:h-24px "
              title={comment.name.toString()}
            />
          </div>
          <div className="pl-8px md:pl-0">
            <div className="gap-6px mb-2px flex items-center">
              <div
                title={comment.name.toString()}
                className="md:text-13px text-12px  cursor-default font-bold capitalize"
              >
                {truncateText(comment.name.toString(), 3)}
              </div>
              <div className="text-12px text-#60606060 ml-auto md:ml-0">2 ay önce</div>
            </div>
            <div className="md:text-14px text-12px">{comment.body}</div>
            <div className="mb-16px relative flex  ">
              <div
                title={`${like.toString()} like `}
                className="-left-9px -top-2px absolute flex items-center"
              >
                <div
                  className="text-16px transition-color h-30px w-30px transition-color flex cursor-pointer items-center justify-center rounded-full hover:bg-[rgba(0,_0,_0,_0.05)]"
                  onClick={handleLikeClick}
                >
                  {liked ? (
                    <div className="i-iconamoon:like-fill"></div>
                  ) : (
                    <div className="i-iconamoon:like-duotone"></div>
                  )}
                </div>
                <div className="md:text-12px text-11px mr-8px cursor-default">{like}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        onClick={getMoreComment}
        className="h-45px mt-[25px] flex w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]"
      >
        {commentLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="i-eos-icons:three-dots-loading text-40px opacity-85"></div>
          </div>
        ) : (
          'Daha fazla göster'
        )}
      </div>
    </div>
  );
}
