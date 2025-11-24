import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const LayoutLineIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" {...props}>
    <path
      d="M7.7778 12.4445H29.5556V7.77786H7.7778V12.4445ZM21.7778 29.5556V15.5556H7.7778V29.5556H21.7778ZM24.8889 29.5556H29.5556V15.5556H24.8889V29.5556ZM6.22224 4.66675H31.1111C31.9703 4.66675 32.6667 5.3632 32.6667 6.2223V31.1112C32.6667 31.9703 31.9703 32.6667 31.1111 32.6667H6.22224C5.36314 32.6667 4.66669 31.9703 4.66669 31.1112V6.2223C4.66669 5.3632 5.36314 4.66675 6.22224 4.66675Z"
      fill={pathFill}
    />
  </svg>
);
