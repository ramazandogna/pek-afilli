import FullContent from '../../components/contentSections/FullContent';
import Card from '../../components/card/';
import Slider from '../../components/slider';
import ListContent from '../../components/contentSections/ListContent';

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
