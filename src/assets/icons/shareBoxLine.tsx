import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ShareBoxLineIcon = ({ pathFill = 'black', ...props }: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M7 0V2H2V16H16V11H18V17C18 17.5523 17.5523 18 17 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H7ZM14.7071 4.70711L9 10.4142L7.5858 9L13.2929 3.29289L10 0H18V8L14.7071 4.70711Z"
      fill={pathFill}
    />
  </svg>
);
