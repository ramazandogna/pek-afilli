'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { unFormatTitle } from '../../helpers/functions';
import { motion } from 'framer-motion';

export default function BreadCrumb({ link, name }: { link?: string; name?: string }) {
  const pathName = usePathname();
  const pathNames = pathName.split('/').filter((path) => path);
  const lastPath: number = pathNames.length - 1;

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex w-full items-center gap-[12px] rounded bg-slate-200 p-2 text-[13px] shadow-sm"
    >
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
          {unFormatTitle(pathNames[lastPath])}
        </span>
      </Link>
    </motion.div>
  );
}
