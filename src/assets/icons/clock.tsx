import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ClockIcon = (props: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1997_3756)">
      <path
        d="M7.99333 1.33334C4.31333 1.33334 1.33333 4.32 1.33333 8C1.33333 11.68 4.31333 14.6667 7.99333 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33334 7.99333 1.33334ZM8 13.3333C5.05333 13.3333 2.66666 10.9467 2.66666 8C2.66666 5.05334 5.05333 2.66667 8 2.66667C10.9467 2.66667 13.3333 5.05334 13.3333 8C13.3333 10.9467 10.9467 13.3333 8 13.3333Z"
        fill="#A3A3A3"
      />
      <path
        d="M8.33333 4.66667H7.33333V8.66667L10.8333 10.7667L11.3333 9.94667L8.33333 8.16667V4.66667Z"
        fill="#A3A3A3"
      />
    </g>
    <defs>
      <clipPath id="clip0_1997_3756">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
