'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BreadCrumb({ link, name }: { link?: string; name?: string }) {
  const pathName = usePathname();
  const pathNames = pathName.split('/').filter((path) => path);
  const formatPathSegment = (pathSegment: string) => {
    return pathSegment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="flex w-full items-center gap-[12px] rounded bg-slate-200 p-2 text-[13px]">
      <Link href="/">
        <span className="transition-color  text-slate-500 hover:text-slate-600">Ana Sayfa</span>
      </Link>
      <span className="text-slate-500"> / </span>
      {name && link && (
        <>
          <Link href={link}>
            <span className=" transition-color capitalize  text-slate-500 hover:text-slate-600">
              {name}
            </span>
          </Link>
          <span className="text-slate-500"> / </span>
        </>
      )}
      <Link href={pathName}>
        <span className="transition-color  text-slate-500 hover:text-slate-600">
          {formatPathSegment(pathNames[0])}
        </span>
      </Link>
    </div>
  );
}
