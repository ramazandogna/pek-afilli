import { notFound } from 'next/navigation';
import React from 'react';
import { getCategoryBySlug } from '../../../helpers/apis/getCategory';
import Card from '../../../components/card';
import CategoryContent from '../../../layouts/contents/categoryContent';
import { fetchPosts } from '../../../helpers/apis/fetchs';
import BreadCrumb from '../../../components/breadCrumb';
import CategoriesSection from '../../../components/content/categoriesSection';
import HeroSection from '../../../components/category/heroSection';
import { getCategorySlugs } from '../../../lib/getCategorySlugs';
import getPostList from '../../../lib/getAllPosts';
import { getCategoryDetails } from '../../../lib/getCategoryDetails';

export default async function page({ params }: { params: { category: string } }) {
  const { category: slug } = params;
  const slugs = await getCategorySlugs({ name: params.category });
  const categoryPost = await getPostList('', { key: 'categoryName', value: params.category });
  const categoryDetails = await getCategoryDetails(params.category);

  const isValidSlug = slugs.some((s: { slug: string }) => params.category.includes(s.slug));

  if (!isValidSlug) {
    notFound();
  }

  if (!categoryDetails) {
    notFound();
  }

  return (
    <main>
      <Card className="gap=[200px] flex flex-col p-0 md:p-[16px]">
        <BreadCrumb />

        <HeroSection category={categoryDetails} />

        <CategoryContent params={params} posts={categoryPost} />
      </Card>
    </main>
  );
}
