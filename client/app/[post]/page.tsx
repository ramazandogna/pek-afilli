//components
import Comments from '../../components/comments';
import WriteComment from '../../components/writeComment';
import HeroSection from '../../components/content/heroSection';
import Post from '../../components/content/post';
import Card from '../../components/card';
import CategoriesSection from '../../components/content/categoriesSection';
//layouts
import RelatedContent from '../../layouts/contents/relatedContent';
//helpers
import Images from '../../helpers/slider/images';
import { fetchComments, fetchPost, fetchPosts } from '../../helpers/apis/fetchs';
//types
import { Content } from '../../types/content';
import { CommentsType } from '../../types/comments';

async function Home({ params }: { params: { post: string } }) {
  const getSinglePosts = async () => {
    try {
      const post = await fetchPost(1);
      return post;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
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
  const post: Content = await getSinglePosts();
  const relatedPosts: Content[] = await getRelatedPost();
  const categories = ['Category 1', 'Category2', 'Category3'];
  const views = 2000;
  const readTime = post.body.split(' ').length / 200;
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

export default Home;
