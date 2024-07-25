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

export default async function PostPage({ params }: { params: { post: string } }) {
  const getSinglePost = async () => {
    try {
      const post = await fetchPostBySlug(params.post);
      if (!post) {
        notFound();
      } else {
        return post;
      }
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      notFound();
    }
  };

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

  const comments = await getComments();
  const post: Content = await getSinglePost();
  const relatedPosts: Content[] = await getRelatedPost();
  const categories = ['Category 1', 'Category2', 'Category3'];
  const views = 2000;
  const readTime = post.body.split(' ').length / 200;

  console.log(params);
  return (
    <main className="min-h-[100vh]">
      <Card className="my-4 bg-gray-100 p-4">
        <HeroSection
          params={params}
          image={Images[0]}
          readTime={readTime * 26}
          views={views}
          comments={comments.commentsLength}
        />
        <Post post={post} />
        <CategoriesSection categories={categories} />
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
