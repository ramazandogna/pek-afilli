import { useState } from 'react';
import { Search } from '../../../public/icons/search';
import styles from './styles.module.css';
import getAllPosts from '../../../lib/getAllPosts';
export default function HeaderInput() {
  const [query, setQuery] = useState('best');
  async function getSearchPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const posts = await getAllPosts('', null, 5, query);
      console.log('query:', query, 'posts:', posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  function handleIconClick() {
    const event = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
    getSearchPost(event);
  }

  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={getSearchPost}>
        <input
          type="text"
          placeholder="Search in the site.."
          className={`${styles.searchInput} h-[30px] w-[200px]`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div
        onClick={handleIconClick} // Call the wrapper function
        className="absolute right-[6px] top-[50%] flex h-[65%] -translate-y-[50%] items-center gap-[6px]"
      >
        <div className="h-full border-[0.35px] border-[#00000060]"></div>
        <Search className={styles.inputIcon} />
      </div>
    </div>
  );
}
