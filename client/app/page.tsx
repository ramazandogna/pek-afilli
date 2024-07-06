//components
import { fetchPosts } from '../helpers/apis/fetchs';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

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
      return posts.slice(0, 6);
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

  const dataPost = await getPopularPost();
  const dataList = await getListPost();
  const dataMoney = await getMoneyPost();

  return (
    <main>
      <Header />

      <div className="width-container section">
        <Contents dataList={dataList} dataMoney={dataMoney} dataPost={dataPost} />
      </div>

      <Footer />
    </main>
  );
}
