export default async function graphqlRequest(query: object) {
  const url = 'https://wp.pekafilli.com/graphql';
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(query)
  });

  const resJson = await res.json();
  return resJson;
}
