import BreadCrumb from '../../components/breadCrumb';
import Comments from '../../components/comments';
import RelatedPosts from '../../components/relatedPosts';
import WriteComment from '../../components/writeComment';
import { fetchPost } from '../../helpers/apis/fetchs';
async function Home({ params }: { params: { post: string } }) {
  //gets
  const getSinglePosts = async () => {
    try {
      const post = await fetchPost(1);
      console.log(post);
      return post;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const post: Content = await getSinglePosts();
  console.log(post);

  return (
    <main className="min-h-[100vh]">
      <BreadCrumb />
      <div className="my-4 bg-gray-100 p-4 shadow-md">
        <h2 className="mb-[20px] text-[24px] font-bold">{params.post}</h2>
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
