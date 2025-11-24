import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const Filter2FillIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" fill={pathFill} />
  </svg>
);
