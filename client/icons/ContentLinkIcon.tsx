import React from 'react';
import type { SVGProps } from 'react';

export function ContentLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="#d6d6d6"
        strokeDasharray={28}
        strokeDashoffset={28}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 6L15 4C16 3 18 3 19 4L20 5C21 6 21 8 20 9L15 14C14 15 12 15 11 14M11 18L9 20C8 21 6 21 5 20L4 19C3 18 3 16 4 15L9 10C10 9 12 9 13 10"
      >
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"></animate>
      </path>
    </svg>
  );
}
