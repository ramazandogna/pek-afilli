'use client';
//Next
import Link from 'next/link';
//Styles
import styles from './header.module.css';
//icons
//CSR
import { useState } from 'react';

export default function Header() {
  const [menuFixed, setMenuFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuCategory, setMenuCategory] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setMenuFixed(true);
  };

  console.log(mobileMenu);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.wrapper} width-container`}>
          <Link href="/">
            <div className={`${styles.logo} backgroundContent ml-4`}>
              <div className="hidden md:block">PEK</div>
              <div className="hidden md:block">AFİLLİ</div>
              <div className="md:hidden">PEK AFİLLİ</div>
            </div>
          </Link>
          <div className={styles.menus}>
            <div className={styles.topMenu}>
              <div className={styles.topLeft}>
                <div className={styles.social}>
                  <div className={styles.iconBg}>
                    <div className={`${styles.icon} i-ri:instagram-fill`} />
                  </div>
                  <div className={styles.iconBg}>
                    <div className={`${styles.icon} i-ant-design:twitter-circle-filled`} />
                  </div>
                  <div className={styles.iconBg}>
                    <div className={`${styles.icon} i-ri:youtube-fill`} />
                  </div>
                  <div className={styles.iconBg}>
                    <div className={`${styles.icon} i-mingcute:pinterest-fill`} />
                  </div>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Search in the site.."
                    className={`${styles.searchInput} h-[30px] w-[200px]  `}
                  />
                  <div className={styles.inputIcons}>
                    <div className={styles.inputBorder}></div>
                    <div className={`${styles.inputIcon} i-ic:round-search`} />
                  </div>
                </div>
              </div>
              <div className={styles.topRight}>
                <Link href="/auth/login" className={`${styles.topRightSignIn} backgroundContent`}>
                  <div className={`${styles.signInIcon} i-uil:signin`} />
                  <div>Sign In</div>
                </Link>
                <Link
                  href="/auth/register"
                  className={`${styles.topRightSignUp} backgroundContent2`}
                >
                  <div className={`i-carbon:join-node ${styles.signUpIcon}`} />
                  <div>Join Now</div>
                </Link>
              </div>
            </div>
            <div className={styles.bottomMenu}>
              <ul className={styles.bottomLeft}>
                <li className={styles.bottomLeftItem}>Magazine</li>
                <li className={styles.bottomLeftItem}>Series</li>
                <li className={styles.bottomLeftItem}>Technologies</li>
                <li className={styles.bottomLeftItem}>Motivation</li>
              </ul>
              <Link href="/" className={styles.bottomRight}>
                <div className={`i-mdi:hot ${styles.hotIcon}`} />
                <div>What&apos;s Hot</div>
              </Link>
            </div>
          </div>
          <div onClick={toggleMenu} className={styles.mobileIcon}>
            <div className="i-solar:hamburger-menu-broken" />
          </div>
        </div>
      </nav>

      <>
        <div
          className={`${mobileMenu === true ? 'slide-in' : 'slide-out'} ${menuFixed === true ? '' : 'hidden'}  fixed bottom-0 right-0 top-0 z-[1000001] flex h-full w-[85%] flex-col  items-center gap-[16px] bg-[#1f2024] px-[30px] text-white duration-300 md:hidden`}
        >
          <div className="mb-[30px] flex h-[55px] w-full items-center justify-between text-[20px] font-bold uppercase">
            <Link href="/">
              <div className={`${styles.logo} backgroundContent`}>
                <div className="">PEK AFİLLİ</div>
              </div>
            </Link>
            <div
              onClick={toggleMenu}
              className="i-material-symbols-close-rounded cursor-pointer text-[24px]"
            />
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
                <div
                  className={` i-mdi-chevron-down ${menuCategory === true ? 'rotate-180' : 'rotate-0'}  text-[24px] duration-300`}
                />
              </div>
              <div
                className={`${menuCategory === true ? 'slide-bottom' : 'slide-top'} flex-col pl-[10px] text-[13px] transition-all  duration-300`}
              >
                <div className="flex w-full  py-[10px]">
                  <Link href="/">Magazine</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/">Series</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/">Technologies</Link>
                </div>
                <div className="flex w-full  py-[10px]">
                  <Link href="/">Motivation</Link>
                </div>
              </div>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Magazine</Link>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Series</Link>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Technologies</Link>
            </div>
            <div className="flex w-full border-b border-[#ffffff0d] py-[15px] font-bold">
              <Link href="/">Motivation</Link>
            </div>
          </div>
          <div className="mb-[15px] flex items-end justify-center gap-4 text-[24px]">
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <div className="i-teenyicons:instagram-solid" />
            </Link>
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <div className="i-ant-design:twitter-circle-filled" />
            </Link>
            <Link className="flex h-[40px] w-[40px] items-center justify-center" href="/">
              <div className="i-ri:youtube-fill" />
            </Link>
          </div>
        </div>
      </>
    </>
  );
}
