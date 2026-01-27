import { type JSX, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PrivateLayout, PublicLayout } from 'src/layouts';

import { suspenseFallback } from '../hoc';

import { ROUTES } from './paths';

const SignUpPage = lazy(() => import('src/pages/SignUpPage'));
const SignInPage = lazy(() => import('src/pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('src/pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPasswordPage'));
const CreateAccountPage = lazy(() => import('src/pages/CreateAccountPage'));
const AccountSetupPage = lazy(() => import('src/pages/AccountSetupPage'));
const InviteUserPage = lazy(() => import('src/pages/InviteUserPage'));

const HomePage = lazy(() => import('src/pages/HomePage'));
const ProjectsPage = lazy(() => import('src/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('src/pages/ProjectDetailPage'));
const NewProjectPage = lazy(() => import('src/pages/NewProjectPage'));
const AssumptionsPage = lazy(() => import('src/pages/AssumptionsPage'));
const CRMDataPage = lazy(() => import('src/pages/CRMDataPage'));
const SettingPage = lazy(() => import('src/pages/SettingPage'));
const TeamBillingPage = lazy(() => import('src/pages/TeamBillingPage'));

const RouteComponents = (): JSX.Element => {
  useEffect(() => {
    const handleOnline = (): void => {
      enqueueSnackbar({ message: 'You are online', variant: 'success' });
    };

    const handleOffline = (): void => {
      enqueueSnackbar({ message: 'You are offline', variant: 'error' });
    };

    globalThis.addEventListener('online', handleOnline);
    globalThis.addEventListener('offline', handleOffline);

    return (): void => {
      globalThis.removeEventListener('online', handleOnline);
      globalThis.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.AUTH.PATH} element={<PublicLayout />}>
        <Route index path={ROUTES.AUTH.SIGNIN.PATH} element={suspenseFallback(SignInPage)} />
        <Route path={ROUTES.AUTH.SIGNUP.PATH} element={suspenseFallback(SignUpPage)} />
        <Route path={ROUTES.AUTH.FORGOT_PASSWORD.PATH} element={suspenseFallback(ForgotPasswordPage)} />
        <Route path={ROUTES.AUTH.RESET_PASSWORD.PATH} element={suspenseFallback(ResetPasswordPage)} />
        <Route path={ROUTES.AUTH.CREATE_ACCOUNT.PATH} element={suspenseFallback(CreateAccountPage)} />
      </Route>
      <Route path={ROUTES.AUTH.ACCOUNT_SETUP.PATH} element={suspenseFallback(AccountSetupPage)} />
      <Route path={ROUTES.AUTH.INVITE_USER.PATH} element={suspenseFallback(InviteUserPage)} />
      <Route path={ROUTES.DEFAULT.PATH} element={<PrivateLayout />}>
        <Route index element={suspenseFallback(HomePage)} />
        <Route path={ROUTES.DEFAULT.PROJECTS.PATH}>
          <Route index element={suspenseFallback(ProjectsPage)} />
          <Route path={`${ROUTES.DEFAULT.PROJECTS.PATH}/:id`} element={suspenseFallback(ProjectDetailPage)} />
          <Route
            path={ROUTES.DEFAULT.PROJECTS.NEW_PROJECT.STAGES.PATH}
            element={suspenseFallback(NewProjectPage)}
          />
          <Route
            path={ROUTES.DEFAULT.PROJECTS.NEW_PROJECT.ASSUMPTIONS.PATH}
            element={suspenseFallback(AssumptionsPage)}
          />
          <Route
            path={ROUTES.DEFAULT.PROJECTS.NEW_PROJECT.PATH}
            element={<Navigate to={ROUTES.DEFAULT.PROJECTS.NEW_PROJECT.STAGES.PATH} />}
          />
        </Route>
        <Route path={ROUTES.DEFAULT.CRM_DATA.PATH} element={suspenseFallback(CRMDataPage)} />
        <Route path={ROUTES.DEFAULT.SETTING.PATH} element={suspenseFallback(SettingPage)} />
        <Route path={ROUTES.DEFAULT.TEAM_BILLING.PATH} element={suspenseFallback(TeamBillingPage)} />
      </Route>
    </Routes>
  );
};

export default RouteComponents;
