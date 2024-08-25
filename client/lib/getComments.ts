import graphqlRequest from './graphqlRequest';
import { PostComments, CommentsResponse } from '../types/comments';

export async function getComments(
  slug: string,
  endCursor: string = ''
): Promise<PostComments> {
  const condition = `id: "${slug}", idType: SLUG`;

  const query = {
    query: `query getComments {
            post(${condition}) {
              commentCount
              comments(where: {parentIn: "", order: ASC, orderby: COMMENT_DATE}, first: 1, after: "${endCursor}") {
                nodes {
                  content
                  author {
                    node {
                      name
                    }
                  }
                  date
                  parentId
                  id
                }
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const post: PostComments = resJson.data.post;
  console.log('post', post);

  return post;
}
