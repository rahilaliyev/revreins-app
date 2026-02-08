import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const PolygonIcon = ({ pathFill = '#0D3F27', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" {...props}>
    <path
      d="M0.920899 0.499999L14.667 0.5L7.79395 11.083L0.920899 0.499999Z"
      fill={pathFill}
      stroke={pathFill}
    />
  </svg>
);
