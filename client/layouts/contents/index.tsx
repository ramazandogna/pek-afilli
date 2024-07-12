//components
import Card from '../../components/card';
import Slider from '../../components/slider';
//layouts
import FullContent from './fullContent';
import ListContent from './listContent';
import RecentContent from './recentContent';
//types
import { Content } from '../../types/content';

export default function Contents({
  dataPost,
  dataList,
  dataMoney,
  dataRecent
}: {
  dataPost: Content[];
  dataList: Content[];
  dataMoney: Content[];
  dataRecent: Content[];
}) {
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
      <RecentContent posts={dataRecent} />
    </Card>
  );
}
