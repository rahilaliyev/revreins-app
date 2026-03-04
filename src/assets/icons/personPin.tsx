import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';
import type { IIconProps } from 'src/types/interfaces';

export const PersonPinIcon = ({ pathFill = colorPalette.other.icon, ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1997_3751)">
      <path
        d="M12.6667 1.33334H3.33333C2.59333 1.33334 2 1.93334 2 2.66667V12C2 12.7333 2.59333 13.3333 3.33333 13.3333H6L8 15.3333L10 13.3333H12.6667C13.4 13.3333 14 12.7333 14 12V2.66667C14 1.93334 13.4 1.33334 12.6667 1.33334ZM12.6667 12H9.44667L9.05333 12.3933L8 13.4467L6.94 12.3867L6.55333 12H3.33333V2.66667H12.6667V12ZM8 7.33334C9.1 7.33334 10 6.43334 10 5.33334C10 4.23334 9.1 3.33334 8 3.33334C6.9 3.33334 6 4.23334 6 5.33334C6 6.43334 6.9 7.33334 8 7.33334ZM8 4.66667C8.36667 4.66667 8.66667 4.96667 8.66667 5.33334C8.66667 5.7 8.36667 6 8 6C7.63333 6 7.33333 5.7 7.33333 5.33334C7.33333 4.96667 7.63333 4.66667 8 4.66667ZM12 10.3867C12 8.72 9.35333 8 8 8C6.64667 8 4 8.72 4 10.3867V11.3333H12V10.3867ZM5.65333 10C6.14667 9.66 7.14 9.33334 8 9.33334C8.86 9.33334 9.85333 9.66 10.3467 10H5.65333Z"
        fill={pathFill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1997_3751">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
