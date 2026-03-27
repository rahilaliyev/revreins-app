import { alpha, type Components } from '@mui/material';

import { typographyOptions } from './typography';

import { ArrowDownSLineIcon } from 'src/assets/icons';

export const selectTheme: Components = {
  MuiSelect: {
    defaultProps: {
      IconComponent: ArrowDownSLineIcon,
      size: 'small',
    },
    styleOverrides: {
      icon: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      select: {
        '.MuiInputBase-sizeSmall &': {
          paddingRight: '32px !important',
          textAlign: 'left',
        },
      },
    },
    variants: [
      {
        props: {
          size: 'medium',
        },
        style: {
          height: '48px',
          fontSize: typographyOptions.body1.fontSize,
          lineHeight: typographyOptions.body1.lineHeight,
        },
      },
      {
        props: {
          size: 'small',
        },
        style: {
          height: '40px',
          fontSize: typographyOptions.body2.fontSize,
          lineHeight: typographyOptions.body2.lineHeight,
          padding: '10px 12px',
        },
      },
    ],
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        marginTop: '8px',
        borderRadius: '8px',
        boxShadow: `0 0 0 1px ${alpha('#000', 0.1)}`,
      },
    },
  },
};
