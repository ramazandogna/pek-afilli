import Link from 'next/link';
import React from 'react';
import { formatTitle } from '../../../helpers/functions';

export default function CategoriesSection({ categories }: { categories?: string[] }) {
  return (
    <>
      {categories ? (
        <div className="flex gap-[8px] pb-2 pt-4 text-[13px]">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={formatTitle(category)}>
                <span className="cursor-pointer rounded bg-slate-50 px-2 py-1 capitalize text-slate-400 transition-all hover:text-slate-500 hover:shadow-sm">
                  {category}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
