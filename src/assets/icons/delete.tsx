import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const DeleteIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <g clipPath="url(#clip0_2370_49451)">
      <path
        d="M13.3333 7.5V15.8333H6.66663V7.5H13.3333ZM12.0833 2.5H7.91663L7.08329 3.33333H4.16663V5H15.8333V3.33333H12.9166L12.0833 2.5ZM15 5.83333H4.99996V15.8333C4.99996 16.75 5.74996 17.5 6.66663 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333Z"
        fill={pathFill}
      />
    </g>
    <defs>
      <clipPath id="clip0_2370_49451">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
