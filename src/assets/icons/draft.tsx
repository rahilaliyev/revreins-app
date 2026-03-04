import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const DraftIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_1470_8766)">
      <path
        d="M21.99 6.86L12 1L2 6.86V20H22L21.99 6.86ZM12 13L3.74 7.84L12 3L20.26 7.84L12 13Z"
        fill={pathFill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1470_8766">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
