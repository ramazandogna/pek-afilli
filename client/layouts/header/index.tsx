//Styles
import styles from './header.module.css';
//icons
import { InstagramIcon } from '../../icons/InstagramIcon';
import { PinterestIcon } from '../../icons/PinterestIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import { YoutubeIcon } from '../../icons/YoutubeIcon';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} container-wrap`}>
        <div className={`${styles.logo} backgroundContent`}>Logo</div>
        <div className={styles.menus}>
          <div className={styles.menu}>
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
              <div>
                <input
                  type="text"
                  placeholder="Search in the site.."
                  className={styles.searchInput}
                />
              </div>
            </div>
            <ul className={styles.topRight}>
              <li className={styles.topRightItem}>
                <Link href="/auth/login">Sign In</Link>
              </li>
              <li className={styles.topRightItem}>
                <Link href="/auth/register">Join Now</Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <ul className={styles.bottomLeft}>
              <li className={styles.bottomLeftItem}>Magazine</li>
              <li className={styles.bottomLeftItem}>Series</li>
              <li className={styles.bottomLeftItem}>Technologies</li>
              <li className={styles.bottomLeftItem}>Motivation</li>
            </ul>
            <div className={styles.bottomRight}>Become Yourself</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
