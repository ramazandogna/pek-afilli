import { category } from '../mock/category';

export const getCategories = async () => {
  return category;
};

export const getCategoryBySlug = async (slug: string) => {
  const cate = category.find((category) => {
    return (
      category.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase().replace(/\s+/g, '-')
    );
  });
  return cate;
};
