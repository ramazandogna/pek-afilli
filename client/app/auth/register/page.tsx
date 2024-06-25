import React from 'react';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="bg-white">
      <div>This is Register component</div>
      <Link href="/auth/login">Giriş Yap</Link>
    </div>
  );
}
