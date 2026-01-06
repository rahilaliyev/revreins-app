import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ArrowLeftSLineIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
      fill={pathFill}
    />
  </svg>
);
