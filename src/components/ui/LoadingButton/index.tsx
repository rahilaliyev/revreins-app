import type { JSX } from 'react';

import { Button, type ButtonProps, CircularProgress } from '@mui/material';

export const LoadingButton = ({
  loading,
  children,
  size = 'medium',
  ...props
}: ButtonProps & { loading?: boolean }): JSX.Element => {
  const loaderSize = {
    loaderSizeMap: {
      small: 16,
      medium: 20,
      large: 24,
    },
    thickness: {
      small: 2,
      medium: 3,
      large: 4,
    },
  };

  const shouldUseWhiteSpinner = ['primary', 'error', 'success', 'inherit'].includes(props.color ?? '');

  return (
    <Button
      size={size}
      disabled={props.disabled}
      sx={{
        position: 'relative',
        pointerEvents: loading ? 'none' : undefined,
        opacity: loading ? 1 : undefined,
        ...props.sx,
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress
          size={loaderSize.loaderSizeMap[size]}
          thickness={loaderSize.thickness[size]}
          sx={{
            color: shouldUseWhiteSpinner ? '#FFFFFF' : 'inherit',
          }}
        />
      ) : (
        children
      )}
    </Button>
  );
};
