// Category types
export interface CategoryNode {
  name?: string;
  slug?: string;
  link?: string;
}

export interface Categories {
  nodes: CategoryNode[];
}

// Featured image types
export interface ImageSize {
  sourceUrl: string;
  width: string;
  height: string;
}

export interface MediaDetails {
  sizes: ImageSize[];
}

export interface FeaturedImageNode {
  mediaDetails: MediaDetails;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

// Post types
export interface PostType {
  content: string;
  modified: string;
  databaseId: number;
  slug: string;
  title: string;
  featuredImage: FeaturedImage;
  commentCount: number;
  categories: Categories;
  date: string;
  excerpt: string;
  author: Author;
}

export interface AuthorNode {
    name: string;
  }

  export interface Author {
    node: AuthorNode;
  }


// GraphQL response type
export interface GetSinglePostResponse {
  data: {
    post: PostType;
  };
  extensions?: {
    debug?: Array<{
      type: string;
      message: string;
    }>;
  };
}
