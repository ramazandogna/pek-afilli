import React from 'react';
import type { SVGProps } from 'react';

export function EmailEdit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 12.13c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.22-.21.22-.56 0-.77l-1.24-1.23a.56.56 0 0 0-.38-.17m-2 1.75L13 19.94V22h2.06l6.06-6.07M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-.89l8.24-8.22c.47-.49 1.12-.76 1.8-.76c.34 0 .68.06 1 .19V6c0-1.12-.92-2-2.04-2m0 4l-8 5l-8-5V6l8 5l8-5"
      ></path>
    </svg>
  );
}
