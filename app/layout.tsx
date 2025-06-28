import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//styles
import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/hoverElements.css';
import '../styles/animates.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pek Afilli - Ana Sayfa',
  description: 'Genel olarak Pek Afilli Şeyler hakkında bilgi edinin.',
  icons: '/client/public/pek-afilli-favicon.svg',
  openGraph: {
    title: 'Pek Afilli - Başarıya Dair Pek Afilli Şeyler',
    description: 'Genel olarak Pek Afilli Şeyler hakkında bilgi edinin.',
    url: 'https://pekafilli.com',
    siteName: 'Pek Afilli',
    images: [
      {
        url: 'https://pekafilli.com/path/to/image.jpg',
        width: 1200,
        height: 630
      }
    ],
    locale: 'tr_TR',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
