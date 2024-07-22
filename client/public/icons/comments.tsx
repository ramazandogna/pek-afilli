import React from 'react';
import type { SVGProps } from 'react';

export function Comments(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <defs>
        <mask id="ipTComments0">
          <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={4}>
            <path strokeLinejoin="round" d="M33 38H22v-8h14v-8h8v16h-5l-3 3z"></path>
            <path fill="#555" strokeLinejoin="round" d="M4 6h32v24H17l-4 4l-4-4H4z"></path>
            <path d="M12 22h6m-6-8h12"></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTComments0)"></path>
    </svg>
  );
}
