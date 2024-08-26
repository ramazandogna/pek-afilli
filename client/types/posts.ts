// types.ts

export interface MediaDetails {
  file: string;
  sizes: Array<{
    sourceUrl: string;
    height: number;
    width: number;
  }>;
}

export interface FeaturedImageNode {
  mediaDetails: MediaDetails;
  altText: string;
}

export interface CategoryNode {
  name: string;
  slug: string;
  link: string;
}

export interface PostNode {
  date: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    node: FeaturedImageNode;
  };
  categories: {
    nodes: CategoryNode[];
  };
  title: string;
  author: Author;
}

export interface AuthorNode {
  name: string;
}

export interface Author {
  node: AuthorNode;
}
export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface PostResponse {
  nodes: PostNode[];
  pageInfo: PageInfo;
}
