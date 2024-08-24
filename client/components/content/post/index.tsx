import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import PostImage from '../../image/postImage';

export default function Post({ post }: { post: string }) {

  const defaultWidth = 718; // number
  const defaultHeight = 458; // number

  const options = {
    replace: (domNode) => {
      if (domNode.name === 'img') {
        const { src, alt } = domNode.attribs;
        return <PostImage src={src} alt={alt} layout="responsive" width={700} height={475} />;
      }
    }
  };

  return <div>{parse(post, options)}</div>;
}
