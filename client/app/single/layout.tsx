import React from 'react';
import style from './layout.module.css';
import '../../styles/globals.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="width-container section">{children}</div>
      <Footer />
    </div>
  );
}
