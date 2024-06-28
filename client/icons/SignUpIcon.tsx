import React from 'react';
import type { SVGProps } from 'react';

export function SignUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path
          stroke="#344054"
          d="M16.667 43.75h16.666m8.334-8.333h2.083zm0 8.333h2.083zM8.333 35.417H6.25zm0 8.333H6.25z"
        ></path>
        <path
          stroke="currentColor"
          d="M33.333 35.417h-4.166V18.75h6.25L26.604 8.167a2.083 2.083 0 0 0-3.208 0L14.583 18.75h6.25v16.667h-4.166"
        ></path>
      </g>
    </svg>
  );
}
