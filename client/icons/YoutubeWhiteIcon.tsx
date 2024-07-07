import React from 'react';
import type { SVGProps } from 'react';

export function YoutubeWhiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <mask id="lineMdYoutubeFilled0">
        <path
          fill="#fff"
          fillOpacity={0}
          stroke="#fff"
          strokeDasharray={60}
          strokeDashoffset={60}
          strokeLinecap="round"
          strokeWidth={2}
          d="M12 5C21 5 21 5 21 12C21 19 21 19 12 19C3 19 3 19 3 12C3 5 3 5 12 5z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="60;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s"
            dur="0.5s"
            values="0;1"
          ></animate>
        </path>
        <path d="M10 8.5L16 12L10 15.5z"></path>
      </mask>
      <rect width={24} height={24} fill="currentColor" mask="url(#lineMdYoutubeFilled0)"></rect>
    </svg>
  );
}
