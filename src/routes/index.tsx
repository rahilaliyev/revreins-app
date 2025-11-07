import { type JSX, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PublicLayout } from 'src/layouts';

import { suspenseFallback } from '../hoc';

import { ROUTES } from './paths';

const SignUpPage = lazy(() => import('src/pages/SignUpPage'));

const RouteComponents = (): JSX.Element => {
  useEffect(() => {
    const handleOnline = (): void => {
      enqueueSnackbar({ message: 'You are online', variant: 'success' });
    };

    const handleOffline = (): void => {
      enqueueSnackbar({ message: 'You are offline', variant: 'error' });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return (): void => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.AUTH.PATH} element={<PublicLayout />}>
        <Route index path={ROUTES.AUTH.SIGNUP.PATH} element={suspenseFallback(SignUpPage)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
