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

// import axios from 'axios';

// export default async function graphqlRequest(query: object) {
//   const url = 'http://wp.pekafillli.com/graphql';
//   const headers = { 'Content-Type': 'application/json' };

//   try {
//     const response = await axios.post(url, query, { headers });
//     return response.data;
//   } catch (error) {
//     console.error('Error making GraphQL request:', error);
//     throw error;
//   }
// }
