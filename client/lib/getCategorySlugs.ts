import graphqlRequest from "./graphqlRequest";

export async function getCategorySlugs({name} : {name: string}) {
    const query = {
      query: `query getCategorySlugs {
        categories(where: { name: "${name}" }) {
          nodes {
            slug
          }
        }
      }`
    };

    const resJson = await graphqlRequest(query);
    const categories = resJson.data.categories.nodes;

    return categories;
  }
