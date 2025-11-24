import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const AddFillIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={pathFill} />
  </svg>
);
