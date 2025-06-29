import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//styles
import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/hoverElements.css';
import '../styles/animates.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ErrorBoundary from '../components/errorBoundary';
import { generateMetadata } from '../helpers/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...generateMetadata(),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.svg',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
