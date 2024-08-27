import React from 'react';

import '../../styles/globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="backgroundContent fixed inset-0 z-0"></div>
      <div className="fixed bottom-4 left-4 right-4 top-4 z-[10] flex h-[full] grow shadow-2xl sm:left-auto">
        {children}
      </div>
    </div>
  );
}
