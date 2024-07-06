import FullContent from '../../components/contentSections/fullContent';
import Card from '../../components/card';
import Slider from '../../components/slider';
import ListContent from '../../components/contentSections/listContent';

export default function Contents({
  dataPost,
  dataList,
  dataMoney
}: {
  dataPost: any;
  dataList: any;
  dataMoney: any;
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
    </Card>
  );
}
