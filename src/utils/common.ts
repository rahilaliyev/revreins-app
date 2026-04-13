import { ROUTES } from 'src/routes/paths';

export const getPageTitle = (pathname: string, title?: string): string => {
  if (/^\/projects\/\d+$/.test(pathname)) {
    return 'Projects / Detail';
  }

  const routeTitles: Record<string, string> = {
    [ROUTES.DEFAULT.PATH]: 'Dashboard',
    [ROUTES.DEFAULT.PROJECTS.PATH]: 'Projects',
    [ROUTES.DEFAULT.PROJECTS.PATH]: 'Projects / New Project',
    [ROUTES.DEFAULT.PROJECTS.STAGES.PATH]: 'Projects / New Project / Stages',
    [ROUTES.DEFAULT.PROJECTS.ASSUMPTIONS.PATH]: 'Projects / New Project / Assumptions',
    [ROUTES.DEFAULT.CRM_DATA.PATH]: 'CRM Data',
    [ROUTES.DEFAULT.SETTING.PATH]: 'Setting',
    [ROUTES.DEFAULT.TEAM_BILLING.PATH]: 'Team & Billing',
    [ROUTES.DEFAULT.USER_PROFILE.PATH]: `Profile / ${title ?? ''}`,
  };

  return routeTitles[pathname] || 'Dashboard';
};

export const generateRandomId = (): string => Math.random().toString(36).substring(2, 10);

export const a11yProps = (index: number): { id: string; 'aria-controls': string } => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});
