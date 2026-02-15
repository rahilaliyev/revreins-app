import type { JSX } from 'react';
import type { IIconProps } from 'src/types/interfaces';

export const ChartIcon = (props: IIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1997_3796)">
      <path
        d="M14.6666 8.00001H13.0133C12.722 7.99939 12.4384 8.09421 12.2061 8.26999C11.9737 8.44576 11.8053 8.69281 11.7266 8.97334L10.16 14.5467C10.1499 14.5813 10.1288 14.6117 10.1 14.6333C10.0711 14.655 10.036 14.6667 9.99998 14.6667C9.96392 14.6667 9.92883 14.655 9.89998 14.6333C9.87113 14.6117 9.85008 14.5813 9.83998 14.5467L6.15998 1.45334C6.14988 1.41872 6.12883 1.38831 6.09998 1.36668C6.07113 1.34504 6.03604 1.33334 5.99998 1.33334C5.96392 1.33334 5.92883 1.34504 5.89998 1.36668C5.87113 1.38831 5.85008 1.41872 5.83998 1.45334L4.27331 7.02668C4.19496 7.30611 4.02757 7.55235 3.79656 7.72802C3.56554 7.90368 3.28353 7.99918 2.99331 8.00001H1.33331"
        stroke="#CA3500"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1997_3796">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
