import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Lazy components
const Comments = dynamic(() => import('../../components/comments'));
const CategoriesSection = dynamic(() => import('../../components/post/categoriesSection'));
const RelatedContent = dynamic(() => import('../../sections/post/relatedContent'));
const WriteComment = dynamic(() => import('../../components/writeComment'));

// Regular components
import Card from '../../components/card';
import Post from '../../components/post/post';
import HeroSection from '../../components/post/heroSection';
import StructuredData from '../../components/structuredData';

import type { PostType } from '../../types/post';
import { CategoryNode } from '../../types/posts';
import { getSinglePost } from '../../lib/getSinglePost';
import { getComments } from '../../lib/getComments';
import { getPostSlugs } from '../../lib/getPostSlugs'; // Changed to named import
import getAllPosts from '../../lib/getAllPosts';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { generateMetadata as generateSEOMetadata } from '../../helpers/seo';
import { READING_SPEED } from '../../constants';

export async function generateStaticParams() {
  const slugs = await getPostSlugs(); // parametre VERİLMEZ
  return slugs?.map((post) => ({ post: post.slug })) || [];
}

export const dynamicParams = false;
export const revalidate = 60;

export async function generateMetadata({
  params
}: {
  params: { post: string };
}): Promise<Metadata> {
  const post: PostType = await getSinglePost(params.post);
  if (!post) return {};

  const description = post.excerpt
    ? post.excerpt.replace(/^<p>|<\/p>\n$/g, '').trim()
    : post.content
        .slice(0, 150)
        .replace(/<[^>]*>/g, '')
        .trim();

  const image =
    post.featuredImage?.node.mediaDetails?.sizes?.[0]?.sourceUrl || '/default-image.jpg';

  return generateSEOMetadata({
    title: post.title,
    description,
    image,
    url: `https://pekafilli.com/${params.post}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified,
    author: post.author.node.name
  });
}

export default async function PostPage({ params }: { params: { post: string } }) {
  const post: PostType = await getSinglePost(params.post);
  const slugs = await getPostSlugs(params.post);
  const { comments, commentCount } = await getComments(params.post);

  const isValidSlug = slugs?.some((s: { slug: string }) => params.post.includes(s.slug));
  if (!isValidSlug || !post) notFound();

  const categorieList: string[] = post.categories.nodes
    .map((category) => category?.name)
    .filter((name): name is string => name !== undefined);
  const random = Math.floor(Math.random() * categorieList.length);
  const relatedPosts = await getAllPosts(
    '',
    { key: 'categoryName', value: categorieList[random] },
    2
  );
  const categories = post.categories.nodes as CategoryNode[];

  const words = post.content
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .split(/\s+/);
  const wordCount = words.length;
  const readTime = Math.ceil(wordCount / READING_SPEED.WORDS_PER_MINUTE);

  return (
    <>
      <StructuredData
        title={post.title}
        description={post.excerpt ? post.excerpt.replace(/^<p>|<\/p>\n$/g, '').trim() : ''}
        image={post.featuredImage?.node.mediaDetails?.sizes?.[0]?.sourceUrl}
        url={`https://pekafilli.com/${post.slug}`}
        type="Article"
        publishedTime={post.date}
        modifiedTime={post.modified}
        author={post.author.node.name}
      />
      <Header />
      <main id="comments" className="width-container section min-h-[100vh]">
        <Card className="my-4 bg-gray-100 p-4">
          <HeroSection
            title={post.title}
            image={post.featuredImage}
            readTime={readTime}
            comments={commentCount}
            category={post.categories.nodes[0] as CategoryNode}
            date={post.modified}
            author={post.author.node}
            slug={post.slug}
          />
          <Post post={post.content} />
          <CategoriesSection categories={categories} />
        </Card>
        <Card className="my-4 bg-gray-100 p-4">
          <RelatedContent relatedPosts={relatedPosts} />
        </Card>
        <Card className="my-4 bg-gray-100 p-4">
          <WriteComment postId={post.databaseId} />
        </Card>
        <Card className="my-4 bg-gray-100 p-4">
          <Comments comments={comments} commentCount={commentCount} slug={post.slug} />
        </Card>
      </main>
      <Footer />
    </>
  );
}
