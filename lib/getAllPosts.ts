import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';

export default async function getAllPosts(
  endCursor = '',
  taxonomy: { key: string; value: string } | null = null,
  howMany = 5,
  search: string | null = null
) {
  const query = `
    query getAllPosts(
      $endCursor: String
      $search: String
      $categoryName: String
      $tag: String
    ) {
      posts(
        after: $endCursor
        first: ${howMany}
        where: {
          orderby: { field: DATE, order: DESC }
          search: $search
          categoryName: $categoryName
          tag: $tag
        }
      ) {
        nodes {
          date
          slug
          excerpt
          author {
            node {
              name
            }
          }
          databaseId
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

  const variables: any = {
    endCursor,
    search
  };

  if (taxonomy?.key === 'categoryName') {
    variables.categoryName = taxonomy.value;
  }

  if (taxonomy?.key === 'tag') {
    variables.tag = taxonomy.value;
  }

  const resJson = await graphqlRequest(query, variables);

  // Hata kontrolü
  if (!resJson?.data?.posts) {
    console.error('❌ GraphQL response error in getAllPosts:', resJson);
    return {
      nodes: [],
      pageInfo: {
        endCursor: '',
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: ''
      }
    };
  }

  return resJson.data.posts as PostResponse;
}
