import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import Head from 'next/head';
//components > Lazy Import
const Comments = dynamic(() => import('../../components/comments'));
const CategoriesSection = dynamic(() => import('../../components/post/categoriesSection'));
const RelatedContent = dynamic(() => import('../../sections/post/relatedContent'));
const WriteComment = dynamic(() => import('../../components/writeComment'));
//components > Normal Import
import Card from '../../components/card';
import Post from '../../components/post/post';
import HeroSection from '../../components/post/heroSection';
//types
import type { PostType } from '../../types/post';
import { CategoryNode } from '../../types/posts';
//query
import { getSinglePost } from '../../lib/getSinglePost';
import { getComments } from '../../lib/getComments';
import getPostSlug from '../../lib/getPostSlugs';
import getAllPosts from '../../lib/getAllPosts';

export async function generateMetadata({ params }: { params: { post: string } }) {
  const { post: slug } = params;
  const post: PostType = await getSinglePost(slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt
    ? post.excerpt.replace(/^<p>|<\/p>\n$/g, '').trim()
    : post.content
        .slice(0, 150)
        .replace(/<\/?[^>]+(>|$)/g, '')
        .trim();

  const image = post.featuredImage.node.mediaDetails.sizes[0]?.sourceUrl || '/default-image.jpg';

  return {
    title: `${post.title} | Pek Afilli`,
    description,
    openGraph: {
      title: post.title,
      description,
      image,
      type: 'article'
    },
    icons: '/client/public/pek-afilli-favicon.svg',
    canonical: `https://pekafilli.com/${slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      image,
      datePublished: post.date,
      dateModified: post.modified,
      author: {
        '@type': 'Person',
        name: post.author.node.name
      },
      publisher: {
        '@type': 'Organization',
        name: 'Pek Afilli',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pekafilli.com/logo.jpg'
        }
      }
    }
  };
}

export default async function PostPage({ params }: { params: { post: string } }) {
  const { post: slug } = params;
  const post: PostType = await getSinglePost(slug);
  const slugs = await getPostSlug({ name: params.post });
  const { comments, commentCount } = await getComments(params.post);

  const isValidSlug = slugs.some((s: { slug: string }) => params.post.includes(s.slug));

  if (!isValidSlug) {
    notFound();
  }

  if (!post) {
    notFound();
  }

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
    .replace(/<\/?[^>]+(>|$)/g, ' ') // HTML etiketlerini temizle
    .trim() // Başındaki ve sonundaki boşlukları temizle
    .split(/\s+/); // Metni kelimelere ayır

  const wordCount = words.length;
  //props
  const readTime = Math.ceil(wordCount / 200);
  const postTitle = post.title;
  const author = post.author.node;
  const category = post.categories.nodes[0] as CategoryNode;
  const commentsCount = post.commentCount;
  const featuredImage = post.featuredImage;
  const date = post.modified;

  return (
    <main id="comments" className="min-h-[100vh]">
      <Card className="my-4 bg-gray-100 p-4">
        <HeroSection
          title={postTitle}
          image={featuredImage}
          readTime={readTime}
          comments={commentsCount}
          category={category}
          date={date}
          author={author}
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
  );
}
