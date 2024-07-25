import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="backgroundContent flex min-h-screen w-full items-center justify-center md:w-auto">
      <div className=" flex flex-col gap-[24px] text-center">
        <div className="backgroundContent2 rounded p-[4px]">
          <div className="flex h-[350px] flex-col items-center gap-[24px] rounded bg-white/50 px-[16px] md:flex-row">
            <h1 className=" text-[120px] font-bold">404</h1>
            <div className="flex h-[2px] w-[60%] bg-black md:h-[60%] md:w-[2px]    "></div>
            <p className="mt-4 text-xl text-gray-700">Sayfa Bulunamadı</p>
          </div>
        </div>
        <Link className="" href="/">
          <button
            className="backgroundContent2 h-[40px] w-full min-w-[92px] rounded-[4px] px-[16px]  py-[8px] font-bold text-[#f9fafb] transition-all hover:scale-105 hover:border-2 hover:border-[#088395] hover:bg-[#f9fafb] sm:w-auto"

            // onClick={() => {}}
          >
            Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}
