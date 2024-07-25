//imports
import axios from 'axios';
import { formatTitle } from '../functions';
import { Content } from '../../types/content';

export async function fetchPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

export async function fetchPost(id: number) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
}

export async function fetchPostBySlug(slug: string) {
  const slugToIdMap = await fetchSlugToIdMap();
  const id = slugToIdMap[slug];
  if (!id) {
    return null;
  }
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
}

export async function fetchSlugToIdMap() {
  const posts = await fetchPosts();
  const slugToIdMap: Record<string, number> = {};

  posts.forEach((post: Content) => {
    const slug = formatTitle(post.title); // Slug'ı oluşturun
    slugToIdMap[slug] = post.id; // Slug'ı ID ile eşleştirin
  });

  return slugToIdMap;
}

export async function fetchComments() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
  return res.data;
}

// fetch.ts
