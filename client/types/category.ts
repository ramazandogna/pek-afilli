export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface CategoryType {
  categories: Category[];
}
