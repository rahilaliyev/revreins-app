import { ROUTES } from 'src/routes/paths';

export const getPageTitle = (pathname: string): string => {
  const routeTitles: Record<string, string> = {
    [ROUTES.DEFAULT.PATH]: 'Dashboard',
    [ROUTES.DEFAULT.PROJECTS.PATH]: 'Projects',
    [ROUTES.DEFAULT.CRM_DATA.PATH]: 'CRM Data',
    [ROUTES.DEFAULT.SETTING.PATH]: 'Setting',
    [ROUTES.DEFAULT.TEAM_BILLING.PATH]: 'Team & Billing',
  };

  return routeTitles[pathname] || 'Dashboard';
};
