import React from 'react';
import type { SVGProps } from 'react';

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M20 7L10 17l-5-5"
      ></path>
    </svg>
  );
}
