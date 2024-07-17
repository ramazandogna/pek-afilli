//imports
import axios from 'axios';

export async function fetchPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

export async function fetchPost(id: number) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
}

export async function fetchComments() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
  return res.data;
}
