import graphqlRequest from './graphqlRequest';

/**
 * Eğer slug parametresi verilirse o slug'a ait postun gerçekten var olup olmadığını döner.
 * Verilmezse tüm slug'ları döner (generateStaticParams için).
 */
export async function getPostSlugs(slug?: string): Promise<{ slug: string }[] | null> {
  if (slug) {
    const singleQuery = `
      query getPostSlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          slug
        }
      }
    `;
    const resJson = await graphqlRequest(singleQuery, { slug });

    if (!resJson?.data?.post) return null;
    return [{ slug: resJson.data.post.slug }];
  }

  const allQuery = `
    query getAllPostSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const resJson = await graphqlRequest(allQuery);

  if (!resJson?.data?.posts?.nodes) return null;
  return resJson.data.posts.nodes;
}
