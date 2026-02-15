import { ECRMStatus, ELogicalOperator, EUserRole } from 'src/types/enums';

export const MIN_ASSUMPTIONS_STAGES_LENGTH = 2;

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
  { value: EUserRole.USER, label: 'User', description: 'Can view reports and forecasts' },
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

export const CONDITION_OPERATOR_OPTIONS = [
  {
    value: 'Equals',
    label: 'Equals',
  },
  {
    value: 'Not Equals',
    label: 'Not Equals',
  },
  {
    value: 'Contains',
    label: 'Contains',
  },
  {
    value: 'Does Not Contain',
    label: 'Does Not Contain',
  },
  {
    value: 'Greater Than',
    label: 'Greater Than',
  },
  {
    value: 'Less Than',
    label: 'Less Than',
  },
  {
    value: 'Less Than Or Equal',
    label: 'Less Than Or Equal',
  },
  {
    value: 'Greater Than Or Equal ',
    label: 'Greater Than Or Equal ',
  },
  {
    value: 'Is Empty',
    label: 'Is Empty',
  },
  {
    value: 'Is Not Empty',
    label: 'Is Not Empty',
  },
];

export const LOGIC_OPERATOR_OPTIONS = [
  { label: ELogicalOperator.AND, value: ELogicalOperator.AND },
  { label: ELogicalOperator.OR, value: ELogicalOperator.OR },
  { label: ELogicalOperator.AND_OR, value: ELogicalOperator.AND_OR },
];
