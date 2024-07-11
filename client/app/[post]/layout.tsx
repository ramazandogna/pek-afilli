import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

//styles
import '../../styles/animates.css';
import '../../styles/hoverElements.css';
import '../../styles/globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="width-container section">{children}</div>
      <Footer />
    </div>
  );
}
