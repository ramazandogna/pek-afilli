import React from 'react';
import type { SVGProps } from 'react';

export function Down(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.29em"
      height="1em"
      viewBox="0 0 16 7"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
      ></path>
    </svg>
  );
}
