import { type JSX, type SyntheticEvent, useState } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Box } from '@mui/material';

import { CustomTabPanel } from 'src/components';
import { a11yProps } from 'src/utils';

import Business from './components/Business';
import MyProfile from './components/MyProfile';
import Notifications from './components/Notifications';
import Security from './components/Security';
import { StyledTab, StyledTabs } from './styled';

import {
  AccountCircleIcon,
  LockLineIcon,
  Notification3LineIcon,
  OrganizationChartIcon,
} from 'src/assets/icons';

const SettingPage = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box height="100%">
      <Box p={[2, 3]} borderBottom={`1px solid ${colorPalette.other.stroke}`}>
        <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
          <StyledTab icon={<AccountCircleIcon />} iconPosition="end" label="My Profile" {...a11yProps(0)} />
          <StyledTab
            icon={<LockLineIcon pathFill={colorPalette.primary.main} />}
            iconPosition="end"
            label="Security"
            {...a11yProps(1)}
          />
          <StyledTab
            icon={<Notification3LineIcon pathFill={colorPalette.primary.main} />}
            iconPosition="end"
            label="Notifications"
            {...a11yProps(2)}
          />
          <StyledTab
            icon={<OrganizationChartIcon pathFill={colorPalette.primary.main} />}
            iconPosition="end"
            label="Business"
            {...a11yProps(3)}
          />
        </StyledTabs>
      </Box>
      <Box>
        <CustomTabPanel value={value} index={0}>
          <MyProfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Security />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Notifications />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Business />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default SettingPage;
