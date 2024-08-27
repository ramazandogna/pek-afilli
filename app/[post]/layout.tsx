import React from 'react';

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
