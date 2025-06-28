import React from 'react';
import parse, { Element, DOMNode } from 'html-react-parser';
import PostImage from '../../image/postImage';

export default function Post({ post }: { post: string }) {
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode.type === 'tag' && domNode instanceof Element && domNode.name === 'img') {
        const { src, alt } = domNode.attribs;
        return <PostImage src={src} alt={alt} layout="responsive" width={700} height={475} />;
      }
    }
  };

  return <div>{parse(post, options)}</div>;
}
