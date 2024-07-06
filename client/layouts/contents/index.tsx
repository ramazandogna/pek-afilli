import FullContent from '../../components/ContentSections/FullContent';
import Card from '../../components/Card/index';
import Slider from '../../components/Slider';
import ListContent from '../../components/ContentSections/ListContent';

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
