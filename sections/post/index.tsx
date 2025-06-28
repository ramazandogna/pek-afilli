//components
import Card from '../../components/card';
import Slider from '../../components/slider';
//sections
import FullContent from './fullContent';
import ListContent from './listContent';
//types
import { PostResponse } from '../../types/posts';
import dynamic from 'next/dynamic';

const RecentContent = dynamic(() => import('./recentContent'), { ssr: false });

export default function Contents({
  dataSlider,
  dataPost,
  dataList,
  dataMoney,
  dataRecent
}: {
  dataSlider: PostResponse;
  dataPost: PostResponse;
  dataList: PostResponse;
  dataMoney: PostResponse;
  dataRecent: PostResponse;
}) {
  return (
    <Card>
      <Slider posts={dataSlider} />
      <FullContent categoryLink="inspiration" categoryName="Inspiration" posts={dataList} />
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 grow">
          <ListContent categoryLink="destinations" categoryName="Destinations" posts={dataPost} />
        </div>
        <div className="flex-1 grow">
          <ListContent categoryLink="activities" categoryName="Activities" posts={dataMoney} />
        </div>
      </div>
      <RecentContent posts={dataRecent} />
    </Card>
  );
}
