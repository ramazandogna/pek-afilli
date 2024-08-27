import { CategoryDetails } from '../types/category';
import graphqlRequest from './graphqlRequest';

export async function getCategoryDetails(categoryName: string) {
  const query = {
    query: `query getCategoryDetails {
        category(id: "${categoryName}", idType: SLUG) {
          count
          name
          slug
          description
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails: CategoryDetails = resJson.data.category;

  return categoryDetails;
}
