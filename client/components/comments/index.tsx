'use client';
import React, { useState } from 'react';
import { Comment } from '../../types/comments';
import PekAfilli from '../../public/pek-afilli.svg';
import Image from 'next/image';
import { truncateText } from '../../helpers/functions';
import Link from 'next/link';
import { Like, LikeFill } from '../../public/icons/Like';
import { ThreeDot } from '../../public/icons/threeDot';

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
    }, 1500);
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
    <div className="flex flex-col gap-[16px] rounded bg-white p-4">
      {getComments.map((comment, i) => (
        <div id={(i + 1).toString()} className="relative flex md:gap-[12px]" key={i}>
          <div className="w-[42px] min-w-[42px] md:w-[36px] md:min-w-[36px]">
            <Image
              src={PekAfilli}
              width={24}
              height={24}
              alt="logo"
              className="h-[36px] w-[36px] transition-all hover:rotate-3 hover:scale-[105%] md:h-[24px] md:w-[24px] "
              title={comment.name.toString()}
            />
          </div>
          <div className="pl-[8px] md:pl-0">
            <div className="mb-[2px] flex items-center gap-[6px]">
              <div
                title={comment.name.toString()}
                className="cursor-default text-[12px]  font-bold capitalize md:text-[13px]"
              >
                <Link href={`#${i + 1}`} className="text-[#ff001975]">
                  #{i + 1}
                </Link>
                <span> {truncateText(comment.name.toString(), 3)}</span>
              </div>
              <div className="ml-auto text-[12px] text-[#60606060] md:ml-0">2 ay önce</div>
            </div>
            <div className="text-[12px] md:text-[14px]">{comment.body}</div>
            <div className="relative mb-[16px] flex  ">
              <div
                title={`${like.toString()} like `}
                className="absolute -left-[9px] -top-[2px] flex items-center"
              >
                <div
                  className="transition-color transition-color flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full text-[16px] hover:bg-[rgba(0,_0,_0,_0.05)]"
                  onClick={handleLikeClick}
                >
                  {liked ? <LikeFill></LikeFill> : <Like></Like>}
                </div>
                <div className="mr-[8px] cursor-default text-[11px] md:text-[12px]">{like}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        onClick={getMoreComment}
        className="mt-[25px] flex h-[45px] w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]"
      >
        {commentLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <ThreeDot className="text-[40px] opacity-85" />
          </div>
        ) : (
          'Daha fazla göster'
        )}
      </div>
    </div>
  );
}
