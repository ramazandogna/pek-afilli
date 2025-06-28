/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState } from 'react';
import getAllPosts from '../../lib/getAllPosts';
import { PostResponse } from '../../types/posts';
import GetMorePost from '../../components/getMorePost';
import Modal from '../../components/modal';
import Card from '../../components/card';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchModal({
  query,
  open,
  onClose
}: {
  query: string;
  open: boolean;
  onClose: () => void;
}) {
  const [results, setResults] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!query || !open) return;

      setLoading(true);
      setResults(null);

      try {
        const posts = await getAllPosts('', null, 5, query);
        setResults(posts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [query, open]);

  if (!loading && (!results || results.nodes.length === 0)) {
    return (
      <Modal className="max-h-[200px]!" isOpen={open} onClose={onClose}>
        <div className="flex h-full w-full items-center justify-center">
          <Card className="flex h-full w-full items-center justify-center py-12 text-center">
            <span className="text-sm text-gray-600">No results found for</span>
            <span className="ml-1 font-semibold text-gray-800">{query}</span>
          </Card>
        </div>
      </Modal>
    );
  }

  if (loading) {
    return (
      <Modal isOpen={open} onClose={onClose}>
        <Card className="flex h-[200px] items-center justify-center">
          <span className="animate-ping text-sm">Loading...</span>
        </Card>
      </Modal>
    );
  }

  return (
    <Modal isOpen={open} onClose={onClose}>
      <Card className="my-auto min-h-[96%] overflow-y-auto">
        {!loading && results && (
          <>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Aranıyor: {query}</h2>
            <div className="flex flex-col gap-6">
              {results.nodes.map((post) => (
                <Link
                  href={`/${post.slug}`}
                  key={post.slug}
                  className="flex gap-4 hover:opacity-90"
                >
                  <div className="relative h-[100px] w-[150px] overflow-hidden rounded">
                    <Image
                      src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                      alt={post.featuredImage.node.altText || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="font-semibold text-gray-800">{post.title}</h3>
                    <div className="text-xs text-gray-500">{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sadece yeterince sonuç varsa göster */}
            {results.pageInfo.hasNextPage && query && (
              <div className="mt-6">
                <GetMorePost
                  contents={results}
                  setContents={setResults}
                  taxonomy={{ key: null, value: null }}
                />
              </div>
            )}
          </>
        )}
      </Card>
    </Modal>
  );
}
