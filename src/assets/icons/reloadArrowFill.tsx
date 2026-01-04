import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ReloadArrowFillIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 12C2 6.47715 6.47715 2 12 2C15.0159 2 17.72 3.33509 19.5534 5.44648L22 3V9H16.2854L16.1384 8.86165L18.1351 6.86543C16.6676 5.11383 14.4639 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      fill={pathFill}
    />
  </svg>
);
