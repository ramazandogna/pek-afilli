import React from 'react';
import type { SVGProps } from 'react';

export function Pencil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path
          strokeDasharray={56}
          strokeDashoffset={56}
          d="M3 21l2 -6l11 -11c1 -1 3 -1 4 0c1 1 1 3 0 4l-11 11l-6 2"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="56;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} d="M15 5l4 4">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} strokeWidth={1} d="M6 15l3 3">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
      <path fill="black" fillOpacity={0} d="M17 4H20V7L9 18L6 15L17 4Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.8s"
          dur="0.15s"
          values="0;0.3"
        ></animate>
      </path>
    </svg>
  );
}
