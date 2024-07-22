import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//styles
import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/hoverElements.css';
import '../styles/icons.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pek Afilli',
  description: 'Genel olarak Pek Afilli Şeyler',
  icons: '/client/public/pek-afilli-favicon.svg'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
