export interface CommentAuthorNode {
  name: string;
}

export interface CommentNode {
  content: string;
  author: {
    node: CommentAuthorNode;
  };
  date: string;
  parentId: number | null; // Assuming parentId can be null
  id: string;
}

export interface CommentsResponse {
  nodes: CommentNode[];
  pageInfo: PageInfo;
}

export interface PostComments {
  comments: CommentsResponse;
  commentCount: number;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}
