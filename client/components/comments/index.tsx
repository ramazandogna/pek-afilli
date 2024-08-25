'use client';
import React, { useState } from 'react';
import PekAfilli from '../../public/pek-afilli.svg';
import Image from 'next/image';
import { truncateText } from '../../helpers/functions';
import Link from 'next/link';
import { Like, LikeFill } from '../../public/icons/like';
import { ThreeDot } from '../../public/icons/threeDot';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../helpers/animations/fadeInAnimations';
import { CommentNode, CommentsResponse, PageInfo } from '../../types/comments';
import GetMoreComment from '../getMoreComment';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function Comments({
  comments,
  commentCount,
  slug
}: {
  comments: CommentsResponse;
  commentCount: number;
  slug: string;
}) {
  console.log(comments);
  const [allComments, setAllComments] = useState<CommentNode[]>(comments.nodes);

  const CommentDate = ({ date }: { date: string }) => {
    const formattedDate = formatDistanceToNow(parseISO(date), { addSuffix: true, locale: tr });
    const formattedDateTr = formattedDate.replace('yaklaşık ', '');

    return <div className="ml-auto text-[12px] text-[#60606060] md:ml-0">{formattedDateTr}</div>;
  };

  return (
    <div className="flex flex-col gap-[16px] rounded bg-white p-4">
      {allComments.map((comment, i) => (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          custom={i}
          id={(i + 1).toString()}
          className="relative flex md:gap-[12px]"
          key={i}
        >
          <div className="w-[42px] min-w-[42px] md:w-[36px] md:min-w-[36px]">
            <Image
              src={PekAfilli}
              width={24}
              height={24}
              alt="logo"
              className="h-[36px] w-[36px] transition-all hover:rotate-3 hover:scale-[105%] md:h-[24px] md:w-[24px] "
              title={comment.author.node.name}
            />
          </div>
          <div className="pl-[8px] md:pl-0">
            <div className="mb-[2px] flex items-center gap-[6px]">
              <div
                title={comment.author.node.name}
                className="cursor-default text-[12px]  font-bold capitalize md:text-[13px]"
              >
                <Link href={`#${i + 1}`} className="text-[#ff001975]">
                  #{i + 1}
                </Link>
                <span> {truncateText(comment.author.node.name.toString(), 3)}</span>
              </div>
              <CommentDate date={comment.date} />
            </div>
            <div
              className="text-[12px] md:text-[14px]"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />{' '}
            {/* <div className="relative mb-[16px] flex  ">
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
            </div> */}
          </div>
        </motion.div>
      ))}
      <GetMoreComment
        comments={allComments}
        setComments={setAllComments}
        slug={slug}
        pageInfo={comments.pageInfo}
      />
    </div>
  );
}
