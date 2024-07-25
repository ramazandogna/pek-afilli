'use client';
//Next
import Link from 'next/link';
//Styles
import styles from './header.module.css';
//icons
//CSR
import { useState } from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from '../../public/icons/social';
import { Hot } from '../../public/icons/hot';
import { Menu } from '../../public/icons/menu';
import { Close } from '../../public/icons/close';
import { Search } from '../../public/icons/search';
import { SignIn, SignUp } from '../../public/icons/sign';
import { Down } from '../../public/icons/down';

export default function Header() {
  const [menuFixed, setMenuFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuCategory, setMenuCategory] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setMenuFixed(true);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[99] flex scroll-smooth  bg-white/30 shadow backdrop-blur-2xl md:bottom-auto">
        <div className="width-container flex h-[55px] items-center gap-[16px] py-2 md:h-auto md:py-0">
          <Link href="/">
            <div className={`${styles.logo} backgroundContent ml-4`}>
              <div className="hidden md:block">PEK</div>
              <div className="hidden md:block">AFİLLİ</div>
              <div className="md:hidden">PEK AFİLLİ</div>
            </div>
          </Link>
          <div className="hidden grow flex-col md:flex">
            <div className="flex h-[40px] grow items-center border-b">
              <div className="flex items-center gap-[8px]">
                <div className="flex items-center gap-[4px]">
                  <div className={styles.iconBg}>
                    <Instagram className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <Twitter className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <Youtube className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <Linkedin className={styles.icon} />
                  </div>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Search in the site.."
                    className={`${styles.searchInput} h-[30px] w-[200px]  `}
                  />
                  <div className="absolute right-[6px] top-[50%] flex h-[65%] -translate-y-[50%] items-center gap-[6px]">
                    <div className="h-full border-[0.35px] border-[#00000060]"></div>
                    <Search className={styles.inputIcon} />
                  </div>
                </div>
              </div>
              <div className="ml-auto flex w-[225px] gap-1">
                <Link href="/auth/login" className={`${styles.topRightSignIn} backgroundContent`}>
                  <SignIn className={styles.signInIcon} />
                  <div>Sign In</div>
                </Link>
                <Link
                  href="/auth/register"
                  className={`${styles.topRightSignUp} backgroundContent2`}
                >
                  <SignUp className={styles.signUpIcon} />
                  <div>Join Now</div>
                </Link>
              </div>
            </div>
            <div className="flex h-[40px] grow items-center">
              <ul className="flex gap-3">
                <Link href="/category/magazine">
                  <li className="transition-all hover:scale-[102%]">Magazine</li>
                </Link>
                <Link href="/category/series">
                  <li className="transition-all hover:scale-[102%]">Series</li>
                </Link>
                <Link href="/category/technology">
                  <li className="transition-all hover:scale-[102%]">Technologies</li>
                </Link>
                <Link href="/category/motivation">
                  <li className="transition-all hover:scale-[102%]">Motivation</li>
                </Link>
                <Link href="/category/sport">
                  <li className="transition-all hover:scale-[102%]">Sport</li>
                </Link>
              </ul>
              <Link href="/" className={styles.bottomRight}>
                <Hot className={styles.hotIcon} />
                <div>What&apos;s Hot</div>
              </Link>
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="ml-auto mr-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md text-[40px] text-[#161619] transition-all hover:scale-105 md:mr-auto md:hidden"
          >
            <Menu />
          </div>
        </div>
      </nav>

      <>
        <div
          className={`${mobileMenu === true ? 'slide-in' : 'slide-out'} ${menuFixed === true ? '' : 'hidden'} 
          fixed bottom-0 right-0 top-0 z-[1000001] flex h-full w-[85%] flex-col items-center
           gap-[16px] bg-[#1f2024] px-[30px] text-white duration-300 md:hidden`}
        >
          <div className="mb-[30px] flex h-[55px] w-full items-center justify-between text-[20px] font-bold uppercase">
            <Link href="/">
              <div className={`${styles.logo} backgroundContent`}>
                <div className="">PEK AFİLLİ</div>
              </div>
            </Link>
            <Close onClick={toggleMenu} className="cursor-pointer text-[24px]" />
          </div>

          <div className="mb-[20px] w-full grow">
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Ana Sayfa</Link>
            </div>
            <div className="flex w-full cursor-pointer flex-col  border-b border-[#ffffff0d] ">
              <div
                onClick={() => {
                  setMenuCategory(!menuCategory);
                }}
                className="flex items-center justify-between py-[15px] font-bold"
              >
                <span>Kategoriler</span>
                <Down
                  className={`${menuCategory === true ? 'rotate-180' : 'rotate-0'}  text-[10px] duration-300`}
                />
              </div>
              <div
                className={`${menuCategory === true ? 'slide-bottom' : 'slide-top'} flex-col pl-[10px] text-[13px] transition-all  duration-300`}
              >
                <div className="flex w-full  py-[10px]">
                  <Link href="/category/magazine">Magazine</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/category/series">Series</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/category/technology">Technology</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/category/motivation">Motivation</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/category/sport">Sport</Link>
                </div>
              </div>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Contact</Link>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">About Us</Link>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Advertisement</Link>
            </div>
          </div>
          <div className="mb-[15px] flex items-end justify-center gap-4 text-[24px]">
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <Instagram />
            </Link>
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <Twitter />
            </Link>
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <Youtube />
            </Link>
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <Linkedin />
            </Link>
          </div>
        </div>
      </>
    </>
  );
}
