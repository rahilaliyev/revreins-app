import type React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    caption4?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    caption3: true;
    caption4: true;
  }
}

export const typographyOptions = {
  fontFamily: 'Noto Sans, sans-serif',
  h1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '80px',
    lineHeight: '88px',
    fontWeight: 400,
  },
  h2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '60px',
    lineHeight: '72px',
    fontWeight: 400,
  },
  h3: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 400,
  },
  h4: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 400,
  },
  h5: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400,
  },
  h6: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  subtitle1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  body1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 400,
  },
  body2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 400,
  },
  caption1: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  caption2: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
  },
  caption3: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: 400,
  },
  caption4: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '8px',
    lineHeight: '10px',
    fontWeight: 400,
  },
};

export const typographyTheme = {
  MuiTypography: {
    defaultProps: {
      variant: 'body1',
      variantMapping: {
        body2: 'p',
        subtitle2: 'p',
        caption1: 'span',
        caption2: 'span',
        caption3: 'span',
        caption4: 'span',
      },
    },
  },
};
