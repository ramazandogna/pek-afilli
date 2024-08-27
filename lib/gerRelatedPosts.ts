import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';

export default async function getRelatedPosts(
  endCursor = '',
  categorySlugs: string[], // Aynı kategorideki postlar için kategori sluglarını alıyoruz
  howMany = 2, // Kaç tane ilişkili post gösterilecek
  excludeSlug: string // Mevcut postun slugını hariç tutmak için
) {
  // Kategori ve mevcut postu hariç tutmak için koşullar
  let condition = `after: "${endCursor || ''}", first: ${howMany}, where: {orderby: {field: DATE, order: DESC}, categoryNameIn: ["${categorySlugs.join('","')}"], notIn: ["${excludeSlug}"]}`;

  const query = {
    query: `query getRelatedPosts {
      posts(${condition}) {
        nodes {
          date
          slug
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  height
                  width
                }
              }
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          title
        }
        pageInfo {
          endCursor
          hasPreviousPage
          hasNextPage
          startCursor
        }
      }
    }`
  };

  try {
    const resJson = await graphqlRequest(query);
    const relatedPosts: PostResponse = resJson.data.posts;
    return relatedPosts;
  } catch (error) {
    console.error('Related Posts Fetch Error:', error);
    return null; // Hata durumunda null dönebiliriz
  }
}
