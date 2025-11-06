import { alpha } from '@mui/material';

export const colorPalette = {
  primary: {
    main: '#1B7F4E',
    hover: '#0D3F27',
    active: '#1B7F4E',
    bg: '#D5F6E6',
    bgSecondary: '#EAFBF2',
  },
  secondary: {
    main: alpha('#000', 0.04),
    hover: alpha('#000', 0.06),
    active: alpha('#000', 0.04),
    bg: alpha('#000', 0.04),
  },
  accent: {
    main: '#CDFF00',
    hover: '#A4CC00',
    active: '#D7FF33',
    bg: '#F5FFCC',
    bgSecondary: '#FAFFE5',
  },
  text: {
    main: '#000000',
    secondary: alpha('#000', 0.55),
    disable: alpha('#000', 0.2),
    link: '#3B82F6',
    linkHover: '#2563EB',
    linkVisited: '#60A5FA',
    textInverse: '#FFFFFF',
    textInverse2: alpha('#ffffff', 0.8),
  },
  success: {
    main: '#16A34A',
    hover: '#15803D',
    bg: '#F0FDF4',
    bgHover: '#DCFCE7',
  },
  warning: {
    main: '#EAB308',
    hover: '#CA8A04',
    bg: '#FEFCE8',
    bgHover: '#FEF9C3',
  },
  error: {
    main: '#EF4444',
    hover: '#DC2626',
    bg: '#FEF2F2',
    bgHover: '#FEE2E2',
  },
  info: {
    main: '#3B82F6',
    hover: '#2563EB',
    bg: '#EFF6FF',
    bgHover: '#DBEAFE',
  },
  neutral: {
    main: '#737373',
    hover: '#525252',
    bg: '#FAFAFA',
    bgHover: '#F5F5F5',
  },
  background: {
    main: '#FFFFFF',
    surface1: alpha('#ffffff', 0.03),
    surface2: alpha('#ffffff', 0.05),
  },
  other: {
    black: '#000000',
    icon: '#A3A3A3',
    stroke: alpha('#000000', 0.1),
    strokeHover: alpha('#000000', 0.2),
    bgOverlay: alpha('#000000', 0.55),
  },
  inverted: {
    invertedBg: '#FFFFFF',
    invertedBlack: '#000000',
  },
  green: {
    main: '#22C55E',
    bg: alpha('#ffffff', 0.1),
  },
  yellow: {
    main: '#EAB308',
    bg: alpha('#EAB308', 0.1),
  },
  orange: {
    main: '#F97316',
    bg: alpha('#F97316', 0.1),
  },
  blue: {
    main: '#3B82F6',
    bg: alpha('#3B82F6', 0.1),
  },
  violet: {
    main: '#8B5CF6',
    bg: alpha('#8B5CF6', 0.1),
  },
  purple: {
    main: '#A855F7',
    bg: alpha('#A855F7', 0.1),
  },
  pink: {
    main: '#EC4899',
    bg: alpha('#EC4899', 0.1),
  },
};
