import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';
export default async function getAllPosts(
  endCursor = '',
  taxonomy: { key: string; value: string } | null = null,
  howMany = 5
) {
  let condition = `after: "${endCursor || ''}", first: ${howMany}, where: {orderby: {field: DATE, order: DESC}}`;

  if (taxonomy) {
    condition = `after: "${endCursor}", first: ${howMany}, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

  const query = {
    query: `query getAllPosts {
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
  const resJson = await graphqlRequest(query);
  const allPosts: PostResponse = resJson.data.posts;

  return allPosts;
}
