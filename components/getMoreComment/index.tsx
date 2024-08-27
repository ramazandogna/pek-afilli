'use client';
import { useState } from 'react';
import { ThreeDot } from '../../public/icons/threeDot';
import { CommentNode, PageInfo } from '../../types/comments';
import { getComments } from '../../lib/getComments';

export default function GetMoreComment({
  comments,
  setComments,
  slug,
  pageInfo
}: {
  comments: CommentNode[];
  setComments: (comments: CommentNode[]) => void;
  slug: string;
  pageInfo: PageInfo;
}) {
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [noMoreComment, setNoMorePost] = useState(!pageInfo.hasNextPage);
  const [currentPageInfo, setCurrentPageInfo] = useState(pageInfo);

  const getMoreComment = async () => {
    if (commentsLoading || noMoreComment) return;

    setCommentsLoading(true);

    try {
      // `startCursor` kullanarak yeni yorumları al
      const morePost = await getComments(slug, currentPageInfo.startCursor);

      if (morePost.comments.nodes.length === 0) {
        setNoMorePost(true);
        return;
      }

      // Güncellenmiş yorumları birleştir
      const updatedComments = [...comments, ...morePost.comments.nodes];
      // Güncellenmiş pageInfo'yu kullan
      setComments(updatedComments);
      setCurrentPageInfo(morePost.comments.pageInfo);
      setNoMorePost(!morePost.comments.pageInfo.hasNextPage);
    } catch (error) {
      console.error('Error fetching more comments:', error);
    } finally {
      setCommentsLoading(false);
    }
  };

  return (
    <div
      onClick={getMoreComment}
      className={`${commentsLoading && 'cursor-not-allowed'} ${noMoreComment && 'opacity-50 hover:cursor-not-allowed hover:text-current'} mt-[25px] flex h-[45px] w-full cursor-pointer items-center justify-center border-t-2 py-2 text-[14px] font-bold hover:text-[#0693e3]`}
    >
      {commentsLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <ThreeDot className="text-[40px] opacity-85" />
        </div>
      ) : (
        'Daha fazla göster'
      )}
    </div>
  );
}
