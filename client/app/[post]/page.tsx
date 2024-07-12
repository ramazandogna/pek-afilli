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
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
  const post: Content = await getSinglePosts();

  return (
    <main className="min-h-[100vh]">
      <Card className="my-4 bg-gray-100 p-4">
        <HeroSection params={params} image={Images[0]} />
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
