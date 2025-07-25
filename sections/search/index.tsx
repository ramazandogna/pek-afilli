'use client';
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useCallback } from 'react';
import getAllPosts from '../../lib/getAllPosts';
import { PostResponse } from '../../types/posts';
import GetMorePost from '../../components/getMorePost';
import Modal from '../../components/modal';
import Card from '../../components/card';
import Link from 'next/link';
import Image from 'next/image';
import { API } from '../../constants';

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
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    if (!query || !open) return;

    setLoading(true);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          endCursor: null,
          taxonomy: null
        })
      });
      const posts = await response.json();
      setResults(posts);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  }, [query, open]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPosts();
    }, API.DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [fetchPosts]);

  if (open && !results && !loading) {
    // Modal açıldı ama veri yüklenmedi, hiçbir şey gösterme
    return null;
  }

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
        <Card className="flex h-[96%] w-full items-center justify-center py-12 text-center">
          <span className="animate-ping text-sm">Yükleniyor...</span>
        </Card>
      </Modal>
    );
  }

  if (results) {
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
                    setContents={(morePost) => {
                      let updatePosts: PostResponse = {
                        pageInfo: morePost.pageInfo,
                        nodes: [
                          ...results.nodes,
                          ...morePost.nodes.filter(
                            (newPost) =>
                              !results.nodes.some((oldPost) => oldPost.slug === newPost.slug)
                          )
                        ]
                      };
                      setResults(updatePosts);
                    }}
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

  return null;
}
