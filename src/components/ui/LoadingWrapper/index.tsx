import type { PropsWithChildren, ReactNode } from 'react';

import { CircularProgress, Stack } from '@mui/material';

interface IProps extends PropsWithChildren {
  isLoading: boolean;
}

export const LoadingWrapper = ({ isLoading, children }: IProps): ReactNode =>
  isLoading ? (
    <Stack justifyContent="center" alignItems="center" width="100%">
      <CircularProgress />
    </Stack>
  ) : (
    children
  );
