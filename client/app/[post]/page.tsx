//components
import Comments from '../../components/comments';
import RelatedPosts from '../../components/relatedPosts';
import WriteComment from '../../components/writeComment';
import HeroSection from '../../components/content/heroSection';
//helpers
import Images from '../../helpers/slider/images';
import { fetchPost } from '../../helpers/apis/fetchs';
//types
import { Content } from '../../types/content';
import CategoriesSection from '../../components/content/categoriesSection';
import Post from '../../components/content/post';
import Card from '../../components/card';

async function Home({ params }: { params: { post: string } }) {
  //gets
  const getSinglePosts = async () => {
    try {
      const post = await fetchPost(1);
      return post;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const post: Content = await getSinglePosts();

  const categories = ['Category 1', 'Category2', 'Category3'];
  const comments = 5;
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
          comments={comments}
        />
        <Post post={post} />
        <CategoriesSection categories={categories} />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <RelatedPosts />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <Comments />
      </Card>
      <Card className="my-4 bg-gray-100 p-4">
        <WriteComment />
      </Card>
    </main>
  );
}

export default Home;
