import Link from 'next/link';
import { truncateText } from '../../helpers/functions';

export default function BreadCrumb({
  categoryLink,
  categoryName,
  postSlug,
  postTitle
}: {
  categoryLink?: string;
  categoryName?: string;
  postSlug?: string;
  postTitle?: string;
}) {
  return (
    <div className="breadcrumb-animate flex max-h-[35px] w-full items-center gap-[12px] rounded bg-slate-200 p-2 text-[13px] shadow-sm">
      <Link title="Pekafilli" href="/">
        <span className="transition-color whitespace-nowrap text-slate-500 hover:text-slate-600">
          Ana Sayfa
        </span>
      </Link>

      {categoryLink && categoryName && (
        <>
          <span className="text-slate-500"> / </span>
          <Link title={categoryName} href={categoryLink}>
            <span className="transition-color whitespace-nowrap text-slate-500 hover:text-slate-600">
              {categoryName}
            </span>
          </Link>
        </>
      )}

      {postSlug && postTitle && (
        <>
          <span className="text-slate-500"> / </span>
          <Link title={postTitle} href={postSlug}>
            <span className="transition-color capitalize text-slate-500 hover:text-slate-600">
              <span className="flex md:hidden">{truncateText(postTitle, 3)}</span>
              <span className="hidden md:flex">{postTitle}</span>
            </span>
          </Link>
        </>
      )}
    </div>
  );
}
