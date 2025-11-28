import { type JSX, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PublicLayout } from 'src/layouts';
import PrivateLayout from 'src/layouts/PrivateLayout';

import { suspenseFallback } from '../hoc';

import { ROUTES } from './paths';

const SignUpPage = lazy(() => import('src/pages/SignUpPage'));
const SignInPage = lazy(() => import('src/pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('src/pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPasswordPage'));
const HomePage = lazy(() => import('src/pages/HomePage'));
const AccountSetupPage = lazy(() => import('src/pages/AccountSetupPage'));

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
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPasswordPage)} />
        <Route path={ROUTES.AUTH.RESET_PASSWORD.PATH} element={suspenseFallback(ResetPasswordPage)} />
      </Route>
      <Route path={ROUTES.AUTH.ACCOUNT_SETUP.PATH} element={suspenseFallback(AccountSetupPage)} />
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
