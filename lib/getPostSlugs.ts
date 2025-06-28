import graphqlRequest from './graphqlRequest';

export default async function getPostSlug({ name }: { name: string }) {
  const query = {
    query: `query getPostSlug {
      posts(where: { name: "${name}" }) {
        nodes {
          slug
        }
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  return resJson.data.posts.nodes;
}
