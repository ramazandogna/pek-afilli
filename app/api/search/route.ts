import { NextRequest } from 'next/server';
import getAllPosts from '../../../lib/getAllPosts';

export async function POST(req: NextRequest) {
  const { query, endCursor = '', taxonomy = null } = await req.json();
  const results = await getAllPosts(endCursor, taxonomy, 6, query);
  return Response.json(results);
}
