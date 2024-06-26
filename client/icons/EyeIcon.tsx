import React from 'react';
import type { SVGProps } from 'react';

export function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <defs>
        <clipPath id="lineMdWatchOffLoop0">
          <rect width={24} height={12}></rect>
        </clipPath>
        <symbol id="lineMdWatchOffLoop1">
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z"
            clipPath="url(#lineMdWatchOffLoop0)"
          >
            <animate
              attributeName="d"
              dur="6s"
              keyTimes="0;0.07;0.93;1"
              repeatCount="indefinite"
              values="M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z"
            ></animate>
          </path>
        </symbol>
        <mask id="lineMdWatchOffLoop2">
          <use href="#lineMdWatchOffLoop1"></use>
          <use href="#lineMdWatchOffLoop1" transform="rotate(180 12 12)"></use>
          <circle cx={12} cy={12} r={0} fill="#fff">
            <animate
              attributeName="r"
              dur="6s"
              keyTimes="0;0.03;0.97;1"
              repeatCount="indefinite"
              values="0;3;3;0"
            ></animate>
          </circle>
          <g
            fill="none"
            strokeDasharray={26}
            strokeDashoffset={26}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            transform="rotate(45 13 12)"
          >
            <path stroke="#000" d="M0 11h24"></path>
            <path stroke="#fff" d="M0 13h22">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="M0 13h22;M2 13h22;M0 13h22"
              ></animate>
            </path>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              values="26;0"
            ></animate>
          </g>
        </mask>
      </defs>
      <rect width={24} height={24} fill="currentColor" mask="url(#lineMdWatchOffLoop2)"></rect>
    </svg>
  );
}
