import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const IosShareIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <g clipPath="url(#clip0_2370_49409)">
      <path
        d="M13.3334 4.16665L12.15 5.34998L10.825 4.02498V13.3333H9.17504V4.02498L7.85004 5.34998L6.66671 4.16665L10 0.833313L13.3334 4.16665ZM16.6667 8.33331V17.5C16.6667 18.4166 15.9167 19.1666 15 19.1666H5.00004C4.07504 19.1666 3.33337 18.4166 3.33337 17.5V8.33331C3.33337 7.40831 4.07504 6.66665 5.00004 6.66665H7.50004V8.33331H5.00004V17.5H15V8.33331H12.5V6.66665H15C15.9167 6.66665 16.6667 7.40831 16.6667 8.33331Z"
        fill={pathFill}
      />
    </g>
    <defs>
      <clipPath id="clip0_2370_49409">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
