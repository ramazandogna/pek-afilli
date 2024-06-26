import React from 'react';
import type { SVGProps } from 'react';

export function NameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <circle cx={24} cy={11} r={7} fill="currentColor"></circle>
        <path d="M4 41c0-8.837 8.059-16 18-16"></path>
        <path fill="currentColor" d="m31 42l10-10l-4-4l-10 10v4z"></path>
      </g>
    </svg>
  );
}
