import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const AddBoxLineIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" {...props}>
    <path
      d="M6.22224 4.66675H31.1111C31.9703 4.66675 32.6667 5.3632 32.6667 6.2223V31.1112C32.6667 31.9703 31.9703 32.6668 31.1111 32.6668H6.22224C5.36314 32.6668 4.66669 31.9703 4.66669 31.1112V6.2223C4.66669 5.3632 5.36314 4.66675 6.22224 4.66675ZM7.7778 7.77786V29.5556H29.5556V7.77786H7.7778ZM17.1111 17.1112V10.889H20.2222V17.1112H26.4445V20.2223H20.2222V26.4445H17.1111V20.2223H10.8889V17.1112H17.1111Z"
      fill={pathFill}
    />
  </svg>
);
