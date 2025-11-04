import { type FC, type JSX, Suspense } from 'react';

import { CircularProgress, Stack } from '@mui/material';

export const suspenseFallback = (
  wrapper: FC,
  fallback = (
    <Stack width="100%" p={5} justifyContent="center">
      <CircularProgress />
    </Stack>
  ),
): JSX.Element => {
  const Component = wrapper;
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};
