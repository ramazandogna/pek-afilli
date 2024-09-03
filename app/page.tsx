import Head from 'next/head';
import Contents from '../sections/post/index';
import Footer from '../components/footer/index';
import Header from '../components/header/index';
import getAllPosts from '../lib/getAllPosts';

export default async function Home() {
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
