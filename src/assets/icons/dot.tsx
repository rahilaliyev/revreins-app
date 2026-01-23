import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const DotIcon = ({ pathFill = '#EAFBF2', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" {...props}>
    <circle cx="4" cy="4" r="3" fill={pathFill} />
  </svg>
);
