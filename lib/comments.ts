import graphqlRequest from './graphqlRequest';

export async function createComment({
  body
}: {
  body: { author: string; authorEmail: string; postId: string; content: string };
}) {
  const mutation = `
    mutation createComment($author: String!, $authorEmail: String!, $commentOn: Int!, $content: String!) {
      createComment(
        input: {
          author: $author,
          authorEmail: $authorEmail,
          clientMutationId: "uniqueId",
          content: $content,
          commentOn: $commentOn
        }
      ) {
        success
      }
    }
  `;

  const variables = {
    author: body.author,
    authorEmail: body.authorEmail,
    commentOn: parseInt(body.postId),
    content: body.content
  };

  const resJson = await graphqlRequest(mutation, variables);
  return resJson;
}
