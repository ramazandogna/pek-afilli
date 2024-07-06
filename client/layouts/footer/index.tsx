import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className="mt-[20px] bg-[#161619] px-4 py-[20px] text-[13px] text-white ">
      <div className={`${styles.wrapper} width-container flex flex-col gap-4 md:flex-row`}>
        <div className="flex grow py-[10px] md:flex-[3] ">
          © 2024 Pek Afilli tüm hakları saklıdır.
        </div>
        <ul className="ml-auto flex  items-center gap-2 ">
          <Link className="hover:text-[#0693e3]" href="/">
            <li>İletişim</li>
          </Link>
          <Link className="hover:text-[#0693e3]" href="/">
            <li>Hakkımızda</li>
          </Link>
          <Link className="hover:text-[#0693e3]" href="/">
            <li>Gizlilik Politikası</li>
          </Link>
          <Link className="hover:text-[#0693e3]" href="/">
            <li>Ana Sayfa</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
