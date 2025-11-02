import type { Components } from '@mui/material';

import { colorPalette } from './colorpalette';

export const typographyOptions = {
  fontFamily: 'Gilroy',
  h1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 600,
  },
  h2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 600,
  },
  h3: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  h4: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 600,
  },
  h5: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  h6: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 600,
  },
  subtitle1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    color: colorPalette.secondary.dark,
  },
  subtitle2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '12px',
    lineHeight: '18px',
    color: colorPalette.secondary.dark,
  },

  body1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '20px',
    color: colorPalette.secondary.dark,
  },
  body2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    color: colorPalette.secondary.dark,
  },
};

export const typographyTheme: Components = {
  MuiTypography: {
    defaultProps: {
      variant: 'body2',
      variantMapping: {
        body2: 'p',
        subtitle2: 'p',
      },
    },
    variants: [
      {
        props: { variant: 'subtitle2' },
        style: {
          color: colorPalette.secondary.dark,
        },
      },
    ],
  },
};
