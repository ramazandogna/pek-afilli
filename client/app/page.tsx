//components
import Contents from '../layouts/contents';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

export default function Home() {
  return (
    <main>
      <Header />

      <div className="container-wrap section">
        <Contents />
      </div>

      <Footer />
    </main>
  );
}
