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

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} container-wrap`}>
        <Link href="/">
          <div className={`${styles.logo} backgroundContent`}>
            <div>PEK</div>
            <div>AFİLLİ</div>
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
            <ul className={styles.topRight}>
              <li className={`${styles.topRightSignIn} backgroundContent`}>
                <SignInIcon className={styles.signInIcon} />
                <Link href="/auth/login">Sign In</Link>
              </li>
              <li className={`${styles.topRightSignUp} backgroundContent2`}>
                <SignUpIcon className={styles.signUpIcon} />
                <Link href="/auth/register">Join Now</Link>
              </li>
            </ul>
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
              <Link href="/">What's Hot</Link>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
