import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';

export default async function getRelatedPosts(
  endCursor = '',
  categorySlugs: string[],
  howMany = 2,
  excludeSlug: string
) {
  const query = `
    query getRelatedPosts($endCursor: String, $categories: [String], $exclude: [String]) {
      posts(
        after: $endCursor,
        first: ${howMany},
        where: {
          orderby: {field: DATE, order: DESC},
          categoryNameIn: $categories,
          notIn: $exclude
        }
      ) {
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
    }
  `;

  const variables = {
    endCursor,
    categories: categorySlugs,
    exclude: [excludeSlug]
  };

  const resJson = await graphqlRequest(query, variables);
  return resJson.data.posts as PostResponse;
}
