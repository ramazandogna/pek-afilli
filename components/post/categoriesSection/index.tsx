import Link from 'next/link';
import React from 'react';
import { formatTitle } from '../../../helpers/functions';
import { CategoryNode } from '../../../types/posts';

export default function CategoriesSection({ categories }: { categories: CategoryNode[] }) {
  return (
    <>
      {categories ? (
        <div className="flex w-full flex-wrap gap-[8px] pb-2 pt-4 text-[13px]">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="cursor-pointer rounded bg-slate-200 px-2 py-1 capitalize text-slate-500 transition-all hover:text-slate-600 hover:shadow-sm">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
