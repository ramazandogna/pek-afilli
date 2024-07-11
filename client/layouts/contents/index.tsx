import FullContent from '../../components/contentSections/fullContent';
import Card from '../../components/card';
import Slider from '../../components/slider';
import ListContent from '../../components/contentSections/listContent';
import { Content } from '../../types/content';
import RecentContent from '../../components/contentSections/recentContent';

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
