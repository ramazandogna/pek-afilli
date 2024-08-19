import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
//components
const Comments = dynamic(() => import('../../components/comments'));
const WriteComment = dynamic(() => import('../../components/writeComment'));
const HeroSection = dynamic(() => import('../../components/content/heroSection'));
const Post = dynamic(() => import('../../components/content/post'));
const Card = dynamic(() => import('../../components/card'));
const CategoriesSection = dynamic(() => import('../../components/content/categoriesSection'));
//layouts
import RelatedContent from '../../layouts/contents/relatedContent';
//helpers
import Images from '../../helpers/slider/images';
import {
  fetchComments,
  fetchSlugToIdMap,
  fetchPosts,
  fetchPostBySlug
} from '../../helpers/apis/fetchs';
//types
import { Content } from '../../types/content';
import { CommentsType } from '../../types/comments';
import { getSinglePost } from '../../lib/getSinglePost';
import getPostSlug from '../../lib/getPostSlug';
import { CategoryNode } from '../../types/posts';

console.log();
export default async function PostPage({ params }: { params: { post: string } }) {
  const { post: slug } = params;

  // Slugları getir ve kontrol et
  const slugs = await getPostSlug();
  const isValidSlug = slugs.some((s: { slug: string }) => s.slug === slug);

  if (!isValidSlug) {
    notFound(); // Eğer slug bulunamazsa 404 sayfası göster
  }

  // Slug doğruysa postu getir
  const post = await getSinglePost(slug);

  if (!post) {
    notFound(); // Post verisi bulunamazsa 404 göster
  }

  //   const getSinglePost = async () => {
  //     try {
  //       const post = await fetchPostBySlug(params.post);
  //       if (!post) {
  //         notFound();
  //       } else {
  //         return post;
  //       }
  //     } catch (error) {
  //       console.error('Veri çekme hatası:', error);
  //       notFound();
  //     }
  //   };

  const getRelatedPost = async () => {
    try {
      const posts = await fetchPosts();

      return posts.slice(0, 2);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const getComments = async (): Promise<CommentsType> => {
    try {
      const comments = await fetchComments();
      const commentsLength = comments.length;
      return { comments: comments, commentsLength };
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      throw error;
    }
  };
  console.log('post', post.categories.nodes);

  async function countWords(): Promise<number> {
    // HTML etiketlerini temizle
    const text = post.content.replace(/<\/?[^>]+(>|$)/g, ' ');
    // Metni kelimelere ayır ve boş kelimeleri temizle
    const words = text.trim().split(/\s+/);
    return words.length;
  }

  const comments = await getComments();
  //   const post: Content = await getSinglePost();
  const relatedPosts: Content[] = await getRelatedPost();

  const categories = post.categories.nodes;
  const views = 2000;
  //   const readTime = (post.body.split(' ').length / 200).toFixed(1);

  const words = post.content
    .replace(/<\/?[^>]+(>|$)/g, ' ') // HTML etiketlerini temizle
    .trim() // Başındaki ve sonundaki boşlukları temizle
    .split(/\s+/); // Metni kelimelere ayır

  const wordCount = words.length; // Toplam kelime sayısını al
  console.log('wordCount', wordCount);
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
        />
        <Post post={post.content} />
        <CategoriesSection categories={post.categories.nodes as CategoryNode[]} />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <RelatedContent relatedPosts={relatedPosts} />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <WriteComment />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <Comments comments={comments.comments} />
      </Card>
    </main>
  );
}
