//components
import Contents from '../layouts/contents';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container-wrap section min-h-screen ">
        <Contents />
      </main>
      <Footer />
    </div>
  );
}
