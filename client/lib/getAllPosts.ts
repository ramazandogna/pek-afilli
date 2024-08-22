import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';
export default async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
            posts {
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
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                    startCursor
                  }
                }
                title
              }
            }
          }`
  };
  const resJson = await graphqlRequest(query);
  const allPost: PostResponse = resJson.data.posts;

  return allPost;
}
