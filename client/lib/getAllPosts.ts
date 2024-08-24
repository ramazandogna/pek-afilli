import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';
export default async function getPostList(endCursor = '') {
  const condition = `after: "${endCursor || ''}", first: 5, where: {orderby: {field: DATE, order: DESC}}`;

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
