import { API } from '../constants';

export default async function graphqlRequest(query: string, variables?: object) {
  const url = API.GRAPHQL_URL;
  const headers = { 'Content-Type': 'application/json' };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error('GraphQL request failed:', error);
    throw error;
  }
}
