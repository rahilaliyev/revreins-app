import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const EmailIcon = (props: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1997_3746)">
      <path
        d="M14.6666 4C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666H2.66665C1.93331 2.66666 1.33331 3.26666 1.33331 4V12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V4ZM13.3333 4L7.99998 7.33333L2.66665 4H13.3333ZM13.3333 12H2.66665V5.33333L7.99998 8.66666L13.3333 5.33333V12Z"
        fill="#A3A3A3"
      />
    </g>
    <defs>
      <clipPath id="clip0_1997_3746">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
