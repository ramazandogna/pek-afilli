import { NextRequest } from 'next/server';
import getAllPosts from '../../../lib/getAllPosts';

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const results = await getAllPosts('', null, 6, query);
  return Response.json(results);
}
