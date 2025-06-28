import { PostType } from '../types/post';
import graphqlRequest from './graphqlRequest';

export async function getSinglePost(slug: string): Promise<PostType> {
  const query = {
    query: `query getSinglePost {
      post(id: "${slug}", idType: SLUG) {
        content(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        databaseId
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        commentCount
        categories {
          nodes {
            name
            slug
            link
          }
        }
        date
        excerpt(format: RENDERED)
        author {
          node {
            name
          }
        }
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.post;
}
