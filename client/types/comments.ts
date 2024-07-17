export type Comment = {
  id: number;
  name: number;
  email: string;
  body: string;
};

export interface CommentsType {
  comments: Comment[]; // Sınırlı sayıdaki yorumlar
  commentsLength: number; // Toplam}
}
