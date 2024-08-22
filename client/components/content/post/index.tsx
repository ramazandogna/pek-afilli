import React from 'react';
import { Content } from '../../../types/content';

export default function Post({ post }: { post: string }) {
  return <div dangerouslySetInnerHTML={{ __html: post }} className="slide-post" />;
}
