import Link from 'next/link';
import { truncateText } from '../../helpers/functions';

export default function BreadCrumb({
  link,
  name,
  slug,
  title
}: {
  link?: string;
  name?: string;
  slug: string;
  title: string;
}) {
  return (
    <div className="breadcrumb-animate flex max-h-[35px] w-full items-center gap-[12px] rounded bg-slate-200 p-2 text-[13px] shadow-sm">
      <Link title="Pekafilli" href="/">
        <span className="transition-color whitespace-nowrap text-slate-500 hover:text-slate-600">
          Ana Sayfa
        </span>
      </Link>
      <span className="text-slate-500"> / </span>
      {name && link && (
        <>
          <Link title={name} href={link}>
            <span className="transition-color whitespace-nowrap  text-slate-500 hover:text-slate-600">
              {slug}
            </span>
          </Link>
          <span className="text-slate-500"> / </span>
        </>
      )}
      <Link title={title} href={slug}>
        <span className="transition-color capitalize text-slate-500 hover:text-slate-600">
          <span className="flex md:hidden">{truncateText(title, 3)}</span>
          <span className="hidden md:flex">{title}</span>
        </span>
      </Link>
    </div>
  );
}
