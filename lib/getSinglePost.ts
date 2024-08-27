import { PostType } from '../types/post';
import graphqlRequest from './graphqlRequest';

export async function getSinglePost(slug: any) {
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
  const singlePost: PostType = resJson.data.post;

  return singlePost;
}
