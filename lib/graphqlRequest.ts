export default async function graphqlRequest(query: string, variables?: object) {
  const url = process.env.GRAPHQL_URL;
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    (headers as Record<string, string>)['Authorization'] =
      `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  if (!url) throw new Error('GRAPHQL_URL tanımlı değil');
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
