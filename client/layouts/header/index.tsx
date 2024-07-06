'use client';
//Styles
import styles from './header.module.css';
//icons
import { InstagramIcon } from '../../icons/InstagramIcon';
import { PinterestIcon } from '../../icons/PinterestIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import { YoutubeIcon } from '../../icons/YoutubeIcon';
import Link from 'next/link';
import { SearchIcon } from '../../icons/SearchIcon';
import { SignInIcon } from '../../icons/SignInIcon';
import { SignUpIcon } from '../../icons/SignUpIcon';
import { HotIcon } from '../../icons/HotIcon';
import { HamburgerMenuIcon } from '../../icons/HamburgerMenuIcon';
//CSR
import { useState } from 'react';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.wrapper} width-container`}>
          <Link href="/">
            <div className={`${styles.logo} backgroundContent`}>
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
                    <InstagramIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <TwitterIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <YoutubeIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconBg}>
                    <PinterestIcon className={styles.icon} />
                  </div>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Search in the site.."
                    className={styles.searchInput}
                  />
                  <div className={styles.inputIcons}>
                    <div className={styles.inputBorder}></div>
                    <SearchIcon className={styles.inputIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.topRight}>
                <Link href="/auth/login" className={`${styles.topRightSignIn} backgroundContent`}>
                  <SignInIcon className={styles.signInIcon} />
                  <div>Sign In</div>
                </Link>
                <Link
                  href="/auth/register"
                  className={`${styles.topRightSignUp} backgroundContent2`}
                >
                  <SignUpIcon className={styles.signUpIcon} />
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
                <HotIcon className={styles.hotIcon} />
                <div>What&apos;s Hot</div>
              </Link>
            </div>
          </div>
          <div onClick={handleMobileMenu} className={styles.mobileIcon}>
            <HamburgerMenuIcon />
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className={`${styles.mobileMenu} ${mobileMenu ? styles.open : ''}`}>
          <div onClick={handleMobileMenu} className="mb-[30px] flex h-[55px] w-full items-center">
            Header
          </div>
          <div className="flex w-full py-[15px]">321</div>
          <div className="flex w-full py-[15px]">321</div>
        </div>
      )}
    </>
  );
}
