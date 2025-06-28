import { Search } from '../../../public/icons/search';
import styles from './styles.module.css';

export default function HeaderInput({
  query,
  setQuery,
  setShowModal
}: {
  query: string;
  setQuery: (val: string) => void;
  setShowModal: (val: boolean) => void;
}) {
  function handleIconClick() {
    if (query.trim()) {
      setShowModal(true);
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) setShowModal(true);
        }}
      >
        <input
          type="text"
          placeholder="Search in the site.."
          className={`${styles.searchInput} h-[30px] w-[200px]`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div
        onClick={handleIconClick}
        className="absolute right-[6px] top-[50%] flex h-[65%] -translate-y-[50%] items-center gap-[6px]"
      >
        <div className="h-full border-[0.35px] border-[#00000060]"></div>
        <Search className={styles.inputIcon} />
      </div>
    </div>
  );
}
