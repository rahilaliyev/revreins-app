import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ArrowDownFillIcon = (props: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 16L6 10H18L12 16Z" fill="black" />
  </svg>
);
