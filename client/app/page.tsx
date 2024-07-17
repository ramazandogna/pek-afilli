//layouts
import Contents from '../layouts/contents/index';
//components
import Footer from '../components/footer/index';
import Header from '../components/header/index';
//helpers
import { fetchPosts } from '../helpers/apis/fetchs';

export default async function Home() {
  const getListPost = async () => {
    try {
      const posts = await fetchPosts();
      return posts.slice(6, 12);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const getPopularPost = async () => {
    try {
      const posts = await fetchPosts();
      return posts.slice(14, 20);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const getMoneyPost = async () => {
    try {
      const posts = await fetchPosts();
      return posts.slice(12, 16);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const getRecentPost = async () => {
    try {
      const posts = await fetchPosts();
      return posts;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
      return [];
    }
  };

  const dataPost = await getPopularPost();
  const dataList = await getListPost();
  const dataMoney = await getMoneyPost();
  const dataRecent = await getRecentPost();
  return (
    <main>
      <Header />

      <div className="width-container section">
        <Contents
          dataList={dataList}
          dataMoney={dataMoney}
          dataPost={dataPost}
          dataRecent={dataRecent}
        />
      </div>

      <Footer />
    </main>
  );
}
