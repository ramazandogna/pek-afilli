import { Content } from '../../types/content';
import Card from '../card';

export default function RecentContent({ posts }: { posts: Content[] }) {
  if (!posts) {
    return (
      <Card>
        <div className="flex h-[550px] w-full items-center justify-center bg-black/60">
          Loading...
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-8 mt-2 w-full border-b-2">Recently Posts</div>
    </Card>
  );
}
