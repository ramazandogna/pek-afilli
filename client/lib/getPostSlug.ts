import graphqlRequest from "./graphqlRequest";
export default async function getPostSlug() {
  const query = {
    query: `query getPostSlug {
        posts {
          nodes {
            slug
          }
        }
      }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;

  return slugs;
}
