import axios from 'axios';
import Card from '../../components/card';
import FullContent from '../../components/contentSections/FullContent';
import Slider from '../../components/slider';
import { fetchPosts } from '../../helpers/apis/fetchs';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

export default async function Contents() {
  const getPosts = async () => {
    try {
      const posts = await fetchPosts();
      const firstSixPosts = posts.slice(0, 6);

      return firstSixPosts;
    } catch (error) {
      console.error('Veri getirme hatası:', error);
    }
  };

  const data = await getPosts();

  return (
    <Card>
      <Slider />
      <FullContent posts={data} />
    </Card>
  );
}
