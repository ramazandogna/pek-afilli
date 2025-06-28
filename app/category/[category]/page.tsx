import { notFound } from 'next/navigation';
import React from 'react';
import Card from '../../../components/card';
import CategoryContent from '../../../sections/post/categoryContent';
import BreadCrumb from '../../../components/breadCrumb';
import HeroSection from '../../../components/category/heroSection';
import { getCategorySlugs } from '../../../lib/getCategorySlugs';
import getAllPosts from '../../../lib/getAllPosts';
import { getCategoryDetails } from '../../../lib/getCategoryDetails';
import Footer from '../../../components/footer';
import Header from '../../../components/header';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();
  return slugs?.map((cat) => ({ category: cat.slug })) || [];
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryDetails = await getCategoryDetails(params.category);

  if (!categoryDetails) {
    return {
      title: 'Kategori bulunamadı'
    };
  }

  return {
    title: `${categoryDetails.name} Kategorisi | Pek Afilli`,
    description: `${categoryDetails.name} kategorisine ait yazılar.`,
    openGraph: {
      title: `${categoryDetails.name} Kategorisi | Pek Afilli`,
      description: `${categoryDetails.name} kategorisine ait yazılar.`,
      type: 'website'
    },
    alternates: {
      canonical: `https://pekafilli.com/category/${params.category}`
    },
    metadataBase: new URL('https://pekafilli.com')
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const slugs = await getCategorySlugs();
  const categoryDetails = await getCategoryDetails(params.category);
  const categoryPost = await getAllPosts('', { key: 'categoryName', value: params.category }, 6);

  const isValidSlug = slugs?.some((s) => params.category === s.slug);
  console.log('isvalidSlug', isValidSlug, 'categoryDetails', categoryDetails);
  if (!isValidSlug || !categoryDetails) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="width-container section">
        <Card className="gap=[200px] flex flex-col p-0 md:p-[16px]">
          <BreadCrumb
            categoryLink={`/category/${categoryDetails.slug}`}
            categoryName={categoryDetails.name}
          />
          <HeroSection category={categoryDetails} />
          <CategoryContent params={params} posts={categoryPost} />
        </Card>
      </main>
      <Footer />
    </>
  );
}
