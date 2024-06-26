import React from 'react';
import style from './layout.module.css';
import '../../styles/globals.css';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`${style.backgroundContent} backgroundContent`}>
        <Link className={style.logoLink} href="/">
          <div className={`${style.logo} backgroundContent`}>Logo</div>
        </Link>
      </div>
      <div className={style.authContent}>{children}</div>
    </div>
  );
}
