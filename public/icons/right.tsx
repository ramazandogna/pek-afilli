import React from 'react';
import type { SVGProps } from 'react';

export function Right(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.44em"
      height="1em"
      viewBox="0 0 7 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
      ></path>
    </svg>
  );
}
