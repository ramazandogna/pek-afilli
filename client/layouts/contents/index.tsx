import axios from 'axios';
import Card from '../../components/card';
import FullContent from '../../components/contentSections/FullContent';
import Slider from '../../components/slider';
import { fetchPosts } from '../../helpers/apis/fetchs';
import ListContent from '../../components/contentSections/ListContent';

export default async function Contents() {
  const getListPost = async () => {
    try {
      const posts = await fetchPosts();
      const firstSixPosts = posts.slice(6, 12);

      return firstSixPosts;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
    }
  };

  const getPopularPost = async () => {
    try {
      const posts = await fetchPosts();
      const firstSixPosts = posts.slice(0, 6);

      return firstSixPosts;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
    }
  };

  const getMoneyPost = async () => {
    try {
      const posts = await fetchPosts();
      const firstSixPosts = posts.slice(12, 16);

      return firstSixPosts;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
    }
  };

  const dataPost = await getPopularPost();
  const dataList = await getListPost();
  const dataMoney = await getMoneyPost();

  return (
    <Card>
      <Slider />
      <FullContent posts={dataList} />
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 grow">
          <ListContent posts={dataPost} />
        </div>
        <div className="flex-1 grow">
          <ListContent posts={dataMoney} />
        </div>
      </div>
    </Card>
  );
}
