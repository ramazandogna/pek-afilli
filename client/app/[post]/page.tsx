import Images from '../../helpers/slider/images';
import Comments from '../../components/comments';
import RelatedPosts from '../../components/relatedPosts';
import WriteComment from '../../components/writeComment';
import { fetchPost } from '../../helpers/apis/fetchs';
import HeroSection from '../../layouts/contents/heroSection';
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

  return (
    <main className="min-h-[100vh]">
      <div className="relative my-4 bg-gray-100 p-4 shadow-md">
        <HeroSection params={params} image={Images[0]} />
        <p>
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          <div>
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
          </div>
          <div>
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
            {post.body}
          </div>
        </p>
        <div className="mt-[20px] flex items-center justify-center gap-4 text-[12px]">
          <span className="rounded bg-[#ccc] px-3 py-1">Category 1</span>
          <span className="rounded bg-[#ccc] px-3 py-1">Category 2</span>
          <span className="rounded bg-[#ccc] px-3 py-1">Category 3</span>
        </div>
      </div>
      <RelatedPosts />
      <Comments />
      <WriteComment />
    </main>
  );
}

export default Home;
