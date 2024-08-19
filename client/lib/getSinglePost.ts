import { Post } from '../types/post';
import graphqlRequest from './graphqlRequest';

export async function getSinglePost(slug: any) {
  const query = {
    query: `query getSinglePost {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
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
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost: Post = resJson.data.post;

  return singlePost;
}
