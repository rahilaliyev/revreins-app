import { type JSX, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { colorPalette } from 'src/theme/colorpalette';
import type { IMenuItem } from 'src/types/interfaces';

import {
  Box,
  Button,
  Icon,
  IconButton,
  LinearProgress,
  List,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import { ROUTES } from 'src/routes/paths';

import { StyledCloseIcon, StyledDivider, StyledFreeTrial, StyledMenuListItem, StyledSidebar } from './styled';

import {
  CloseLineIcon,
  ContractLeftLineIcon,
  CurrencyLineIcon,
  Database2LineIcon,
  FundsFillIcon,
  Home5LineIcon,
  Setting5LineIcon,
  SidebarLineIcon,
} from 'src/assets/icons';
import Logo from 'src/assets/images/logo-dashboard.svg?react';

interface IMenuItemsProps {
  items: IMenuItem[];
  isExpanded: boolean;
}

const MAIN_MENU_ITEMS = [
  {
    text: 'Dashboard',
    icon: <Home5LineIcon />,
    path: ROUTES.DEFAULT.PATH,
  },
  {
    text: 'Projects',
    icon: <FundsFillIcon />,
    path: ROUTES.DEFAULT.PROJECTS.PATH,
  },
  {
    text: 'CRM Data',
    icon: <Database2LineIcon />,
    path: ROUTES.DEFAULT.CRM_DATA.PATH,
  },
];

const ACCOUNT_MENU_ITEMS = [
  {
    text: 'Setting',
    icon: <Setting5LineIcon />,
    path: ROUTES.DEFAULT.SETTING.PATH,
  },
  {
    text: 'Team & Billing',
    icon: <CurrencyLineIcon />,
    path: ROUTES.DEFAULT.TEAM_BILLING.PATH,
  },
];

const MenuItems = ({ items, isExpanded }: IMenuItemsProps): JSX.Element => (
  <Stack flexDirection="column">
    {items.map((item) => (
      <StyledMenuListItem key={item.text} component={NavLink} to={item.path} isExpanded={isExpanded}>
        <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
        {isExpanded && (
          <ListItemText
            primary={item.text}
            slotProps={{
              primary: {
                variant: 'body1',
              },
            }}
          />
        )}
      </StyledMenuListItem>
    ))}
  </Stack>
);

const Sidebar = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShowFreeTrial, setIsShowFreeTrial] = useState(true);

  const handleCloseFreeTrial = (): void => setIsShowFreeTrial(false);

  return (
    <StyledSidebar isActive={isExpanded}>
      <Stack flexDirection="column" width="100%">
        {isExpanded ? (
          <Stack width="100%" justifyContent="space-between" alignItems="center" mb={4}>
            <Link to={ROUTES.DEFAULT.PATH}>
              <Logo />
            </Link>
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              <ContractLeftLineIcon pathFill={colorPalette.other.icon} />
            </IconButton>
          </Stack>
        ) : (
          <IconButton onClick={() => setIsExpanded(!isExpanded)} sx={{ my: 4 }}>
            <SidebarLineIcon pathFill={colorPalette.other.icon} />
          </IconButton>
        )}
        <List sx={{ width: '100%', flex: 1 }}>
          <MenuItems items={MAIN_MENU_ITEMS} isExpanded={isExpanded} />
          <StyledDivider isExpanded={isExpanded} />
          {isExpanded && (
            <Typography variant="body1" mb={2} sx={{ marginLeft: '0 !important' }}>
              Account
            </Typography>
          )}
          <MenuItems items={ACCOUNT_MENU_ITEMS} isExpanded={isExpanded} />
        </List>
      </Stack>
      {isExpanded && isShowFreeTrial && (
        <StyledFreeTrial>
          <StyledCloseIcon onClick={handleCloseFreeTrial}>
            <CloseLineIcon pathFill={colorPalette.other.icon} width={16} height={16} />
          </StyledCloseIcon>
          <Typography variant="body2">Free Trial</Typography>
          <Typography variant="caption1" color="text.secondary">
            You still have 3 days left in your free premium trial. Upgrade to keep using the system after the
            time expires.
          </Typography>
          <Box mt={2.5} mb={4}>
            <LinearProgress variant="determinate" value={75} color="inherit" />
          </Box>
          <Stack gap={2}>
            <Button color="inherit">Upgrade</Button>
            <Button variant="text" color="secondary" onClick={handleCloseFreeTrial}>
              Dismiss
            </Button>
          </Stack>
        </StyledFreeTrial>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
