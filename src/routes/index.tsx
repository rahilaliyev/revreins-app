import { type JSX, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PublicLayout } from 'src/layouts';
import PrivateLayout from 'src/layouts/PrivateLayout';

import { suspenseFallback } from '../hoc';

import { ROUTES } from './paths';

const SignUpPage = lazy(() => import('src/pages/SignUpPage'));
const SignInPage = lazy(() => import('src/pages/SignInPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));

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
        <Route index path={ROUTES.AUTH.SIGNIN.PATH} element={suspenseFallback(SignInPage)} />
        <Route path={ROUTES.AUTH.SIGNUP.PATH} element={suspenseFallback(SignUpPage)} />
      </Route>
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
