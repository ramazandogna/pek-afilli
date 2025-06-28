import { CategoryDetails } from '../types/category';
import graphqlRequest from './graphqlRequest';

const query = `
  query getCategoryDetails($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      count
      name
      slug
      description
    }
  }
`;

export async function getCategoryDetails(slug: string): Promise<CategoryDetails> {
  const resJson = await graphqlRequest(query, { slug });
  return resJson.data.category;
}
