import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
//components > Lazy Import
const Comments = dynamic(() => import('../../components/comments'));
const WriteComment = dynamic(() => import('../../components/writeComment'));
const HeroSection = dynamic(() => import('../../components/content/heroSection'));
const CategoriesSection = dynamic(() => import('../../components/content/categoriesSection'));
//components > Normal Import
import Card from '../../components/card';
import Post from '../../components/content/post';
//layouts
import RelatedContent from '../../layouts/contents/relatedContent';
//mock
import { fetchComments, fetchPosts } from '../../helpers/apis/fetchs';
//types
import { Content } from '../../types/content';
import { getSinglePost } from '../../lib/getSinglePost';
import { getComments } from '../../lib/getComments';
import { CategoryNode } from '../../types/posts';
import type { PostType } from '../../types/post';
//query
import getPostSlug from '../../lib/getPostSlugs';
import getAllPosts from '../../lib/getAllPosts';
import getRelatedPosts from '../../lib/gerRelatedPosts';

export default async function PostPage({ params }: { params: { post: string } }) {
  const { post: slug } = params;
  const post: PostType = await getSinglePost(slug);
  const slugs = await getPostSlug({ name: params.post });

  const { comments, commentCount } = await getComments(params.post);
  console.log('comments', comments, commentCount);

  const isValidSlug = slugs.some((s: { slug: string }) => params.post.includes(s.slug));

  if (!isValidSlug) {
    notFound();
  }

  if (!post) {
    notFound();
  }

  //   const getComments = async (): Promise<CommentsType> => {
  //     try {
  //       const comments = await fetchComments();
  //       const commentsLength = comments.length;
  //       return { comments: comments, commentsLength };
  //     } catch (error) {
  //       console.error('Veri getirme hatası:', error);
  //       throw error;
  //     }
  //   };

  //   const comments = await getComments();
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
  const views = 2000;

  const words = post.content
    .replace(/<\/?[^>]+(>|$)/g, ' ') // HTML etiketlerini temizle
    .trim() // Başındaki ve sonundaki boşlukları temizle
    .split(/\s+/); // Metni kelimelere ayır

  const wordCount = words.length; // Toplam kelime sayısını al
  const readTime = Math.ceil(wordCount / 200); // Okuma süresini hesapla (200 kelime/dakika)
  const postTitle = post.title;
  return (
    <main className="min-h-[100vh]">
      <Card className="my-4 bg-gray-100 p-4">
        <HeroSection
          title={postTitle}
          image={post.featuredImage}
          readTime={readTime}
          views={views}
          comments={post.commentCount}
          category={post.categories.nodes[0] as CategoryNode}
          date={post.date}
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
        <Comments
          comments={comments}
          commentCount={commentCount}
          slug={post.slug}
          pageInfo={comments.pageInfo}
        />
      </Card>
    </main>
  );
}
