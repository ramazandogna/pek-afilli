import React from 'react';
import type { SVGProps } from 'react';

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5h10M4 12h16M4 19h10"
        color="currentColor"
      ></path>
    </svg>
  );
}
