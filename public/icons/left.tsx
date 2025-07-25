import React from 'react';
import type { SVGProps } from 'react';

export function Left(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.44em"
      height="1em"
      viewBox="0 0 7 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
      ></path>
    </svg>
  );
}
