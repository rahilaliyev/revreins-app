import { ECRMStatus, EUserRole } from 'src/types/enums';

export const TEMPLATES = [
  {
    title: 'SaaS Funnel',
    description: 'Default SaaS funnel, best used for broad range of systems.',
  },
  {
    title: 'Real Estate',
    description: 'Best used for real estate funnels of funnels with a single sale.',
  },
  {
    title: 'Generic B2B',
    description: 'Generic B2B funnel, best used for broad range of systems.',
  },
  {
    title: 'E-commerce',
    description: 'Best used for e-commerce, retail, or recurring revenue systems.',
  },
];

export const USER_ROLES = [
  { value: EUserRole.OWNER, label: 'Owner', description: '' },
  { value: EUserRole.MEMBER, label: 'Member', description: 'Can view reports and forecasts' },
  // {
  //   value: EUserRole.EDITOR,
  //   label: 'Editor',
  //   description: 'Can read, write and delete entities inside the project',
  // },
  { value: EUserRole.ADMIN, label: 'Admin', description: 'Full access to managing projects and users' },
];

export const CRM_STATUS_COLOR_MAP: Record<ECRMStatus, 'success' | 'error' | 'default'> = {
  [ECRMStatus.CONNECTED]: 'success',
  [ECRMStatus.ERROR]: 'error',
  [ECRMStatus.NOT_CONFIGURATED]: 'default',
};
