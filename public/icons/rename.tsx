import React from 'react';
import type { SVGProps } from 'react';

export function Rename(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M255 1149V895h770v254zm1026 260H-1V639h1282v130H129v510h1152zm768-770v770h-386v-130h256V769h-256V639zm-512 928q111 96 255 96h1v130h-1q-176 0-318-110q-70 54-151 82t-171 28h-1v-130h1q145 0 255-93V474q-52-44-116-66t-139-23h-1V255h1q91 0 172 27t150 79q138-106 318-106h1v130h-1q-148 0-255 92z"
      ></path>
    </svg>
  );
}
