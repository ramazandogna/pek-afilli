//components
import Footer from '../layouts/footer';
import Header from '../layouts/header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container-wrap section min-h-screen">
        <div className="bg-red h-240px flex">test</div>
      </main>
      <Footer />
    </div>
  );
}
