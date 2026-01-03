import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const SidebarLineIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M4 4H28C28.7364 4 29.3333 4.59696 29.3333 5.33333V26.6667C29.3333 27.4031 28.7364 28 28 28H4C3.26363 28 2.66667 27.4031 2.66667 26.6667V5.33333C2.66667 4.59696 3.26363 4 4 4ZM10.6667 6.66667H5.33333V25.3333H10.6667V6.66667ZM13.3333 6.66667V25.3333H26.6667V6.66667H13.3333Z"
      fill={pathFill}
    />
  </svg>
);
