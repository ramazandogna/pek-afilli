import { notFound } from 'next/navigation';
import React from 'react';
import { getCategoryBySlug } from '../../../helpers/apis/getCategory';
import Card from '../../../components/card';
import CategoryContent from '../../../layouts/contents/categoryContent';
import { fetchPosts } from '../../../helpers/apis/fetchs';
import BreadCrumb from '../../../components/breadCrumb';
import CategoriesSection from '../../../components/content/categoriesSection';
import HeroSection from '../../../components/category/heroSection';

export default async function page({ params }: { params: { category: string } }) {
  const getCategory = async () => {
    try {
      const category = await getCategoryBySlug(params.category);
      if (!category) {
        notFound();
      } else {
        return category;
      }
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      notFound();
    }
  };

  const getCategoryPosts = async () => {
    try {
      const posts = await fetchPosts();
      return posts.slice(0, 12);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const category = await getCategory();
  const posts = await getCategoryPosts();
  return (
    <main>
      <Card className="gap=[200px] flex flex-col p-0 md:p-[16px]">
        <BreadCrumb />

        <HeroSection category={category} />

        <CategoryContent posts={posts} />
      </Card>
    </main>
  );
}
