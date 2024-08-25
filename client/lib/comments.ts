import graphqlRequest from './graphqlRequest';

export async function createComment({
  body
}: {
  body: { author: string; authorEmail: string; postId: string; content: string };
}) {
  const mutation = {
    query: `mutation createComment(
            $author: String = "${body.author}",
            $authorEmail: String = "${body.authorEmail}",
            $clientMutationId: String = "uniqueId",
            $commentOn: Int = ${parseInt(body.postId)},
            $content: String = "${body.content}") {
            createComment(
              input: {
                author: $author,
                authorEmail:
                $authorEmail,
                clientMutationId: $clientMutationId,
                content: $content,
                commentOn: $commentOn
              }
            ) {
              success
            }
          }`
  };

  const resJson = await graphqlRequest(mutation);

  return resJson;
}
