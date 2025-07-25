import React from 'react';
import { CategoryDetails } from '../../../types/category';
import Card from '../../card';

export default function HeroSection({ category }: { category: CategoryDetails }) {
  return (
    <Card className="mb-[16px]">
      <h1 className="text-[41px]">{category.name}</h1>
      <p>{category.description}</p>
    </Card>
  );
}
