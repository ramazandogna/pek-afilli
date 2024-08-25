//layouts
import Contents from '../layouts/contents/index';
//components
import Footer from '../components/footer/index';
import Header from '../components/header/index';
//helpers
import { fetchPosts } from '../helpers/apis/fetchs';
import getAllPosts from '../lib/getAllPosts';
import { getCategoryDetails } from '../lib/getCategoryDetails';

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

  const dataPost = await getAllPosts('', { key: 'categoryName', value: 'destinations' }, 4);
  const dataSlider = await getAllPosts('', { key: 'categoryName', value: 'activities' }, 4);
  const dataMoney = await getAllPosts('', { key: 'categoryName', value: 'activities' }, 4);
  const dataList = await getAllPosts('', { key: 'categoryName', value: 'inspiration' }, 6);
  const dataRecent = await getAllPosts();
  return (
    <main>
      <Header />

      <div className="width-container section">
        <Contents
          dataSlider={dataSlider}
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
