import graphqlRequest from './graphqlRequest';

export async function getCategorySlugs(name?: string): Promise<{ slug: string }[] | null> {
  if (name) {
    const singleQuery = `
      query getCategorySlug($name: ID!) {
        category(id: $name, idType: NAME) {
          slug
        }
      }
    `;
    const resJson = await graphqlRequest(singleQuery, { name });
    if (!resJson?.data?.category) return null;
    return [{ slug: resJson.data.category.slug }];
  }

  const allQuery = `
    query getAllCategorySlugs {
      categories(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const resJson = await graphqlRequest(allQuery);
  if (!resJson?.data?.categories?.nodes) return null;
  console.log('getCategorySlugs', resJson.data.categories.nodes);
  return resJson.data.categories.nodes;
}
