//imports
import axios from 'axios';

export async function fetchPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}
