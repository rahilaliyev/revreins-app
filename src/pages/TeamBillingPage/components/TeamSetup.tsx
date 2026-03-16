import { Fragment, type JSX, useMemo } from 'react';
import { USER_ROLES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { EUserRole } from 'src/types/enums';

import { useGetUserInfo } from 'src/apis/user';

import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import { generateRandomId } from 'src/utils';

import { StyledBoxWrapper } from '../styled';

import { AddFillIcon, DeleteBin7LineIcon, InformationLineIcon } from 'src/assets/icons';

const MOCK_DATA = [
  {
    name: 'Irvin Mervin',
    email: 'irvin.mervin@example.com',
    role: EUserRole.ADMIN,
  },
  {
    name: 'Val Natioka',
    email: 'val@example.com',
    role: EUserRole.USER,
  },
];

const PENDING_MOCK_DATA = [
  {
    name: 'Michael Sprout',
    email: 'm.sprout@example.com',
    role: EUserRole.USER,
  },
  {
    name: 'Lisa Either-Morgan',
    email: 'lisa_either@example.com',
    role: EUserRole.USER,
  },
];

const TeamSetup = (): JSX.Element => {
  const { data } = useGetUserInfo();

  const userList = useMemo(() => {
    if (data) {
      return [{ name: data?.user.name, email: data?.user.email, role: EUserRole.OWNER }, ...MOCK_DATA];
    }

    return [];
  }, [data]);

  return (
    <Box>
      <StyledBoxWrapper p={4}>
        <Stack justifyContent="space-between" gap={2}>
          <TextField
            placeholder="Search Users..."
            size="small"
            sx={{ maxWidth: (theme) => theme.spacing(150), width: '100%' }}
          />
          <Button endIcon={<AddFillIcon pathFill={colorPalette.inverted.invertedBg} />}>
            Invite a Team Member
          </Button>
        </Stack>
        <Box my={6}>
          <Stack justifyContent="space-between" alignItems="center">
            <Typography>Your Team</Typography>
            <Typography variant="body2" color="text.secondary">
              {userList?.length}/15
            </Typography>
          </Stack>
          <List>
            {userList?.map((el, key) => (
              <Fragment key={key}>
                <ListItem sx={{ py: 1, px: 3, justifyContent: 'space-between' }}>
                  <Stack>
                    <ListItemAvatar sx={{ minWidth: (theme) => theme.spacing(10) }}>
                      <Avatar sx={{ bgcolor: colorPalette.primary.bg }}>
                        <Typography variant="body2" sx={{ marginLeft: '0 !important' }} color="primary">
                          {el?.name ? el.name?.[0]?.toUpperCase() : el?.email?.[0]?.toUpperCase()}
                        </Typography>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ my: 0, '& .MuiTypography-root': { fontSize: '14px', marginLeft: '12px' } }}
                      primary={el?.name ?? el.email}
                      secondary={el?.name ? el?.email : ''}
                    />
                  </Stack>
                  <Stack justifyContent="space-between">
                    <Chip
                      variant="outlined"
                      label={
                        <Stack alignItems="center" gap={1}>
                          <Typography variant="caption2" sx={{ marginLeft: '0 !important' }}>
                            {USER_ROLES.find((data) => data.value === el.role)?.label}
                          </Typography>
                          <Tooltip
                            placement="bottom-start"
                            title={USER_ROLES.find((data) => data.value === el.role)?.description}
                          >
                            <InformationLineIcon width={16} height={16} />
                          </Tooltip>
                        </Stack>
                      }
                      size="small"
                    />
                    <Stack minWidth={112} justifyContent="flex-end">
                      {el.role !== EUserRole.OWNER && (
                        <>
                          <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            sx={{ marginRight: (theme) => theme.spacing(2) }}
                          >
                            Edit
                          </Button>
                          <IconButton>
                            <DeleteBin7LineIcon width={16} height={16} pathFill={colorPalette.error.main} />
                          </IconButton>
                        </>
                      )}
                    </Stack>
                  </Stack>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Box>
        <Box>
          <Stack justifyContent="space-between" alignItems="center">
            <Typography>Pending Invites</Typography>
            <Typography variant="body2" color="text.secondary">
              {PENDING_MOCK_DATA?.length}/12
            </Typography>
          </Stack>
          <List>
            {PENDING_MOCK_DATA?.map((el, key) => (
              <Fragment key={key}>
                <ListItem sx={{ py: 1, px: 3, justifyContent: 'space-between' }}>
                  <Stack>
                    <ListItemText
                      sx={{ my: 0, '& .MuiTypography-root': { fontSize: '14px', marginLeft: '12px' } }}
                      primary={el?.name ?? el.email}
                      secondary={el?.name ? el?.email : ''}
                    />
                  </Stack>
                  <Stack justifyContent="space-between" minWidth={240}>
                    <Chip
                      variant="outlined"
                      label={
                        <Stack alignItems="center" gap={1}>
                          <Typography variant="caption2" sx={{ marginLeft: '0 !important' }}>
                            {USER_ROLES.find((data) => data.value === el.role)?.label}
                          </Typography>
                          <Tooltip
                            placement="bottom-start"
                            title={USER_ROLES.find((data) => data.value === el.role)?.description}
                          >
                            <InformationLineIcon width={16} height={16} />
                          </Tooltip>
                        </Stack>
                      }
                      size="small"
                    />
                    <Stack justifyContent="flex-end">
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        sx={{ marginRight: (theme) => theme.spacing(2) }}
                      >
                        Resend invite
                      </Button>
                      <IconButton>
                        <DeleteBin7LineIcon width={16} height={16} pathFill={colorPalette.error.main} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Box>
      </StyledBoxWrapper>
      <Alert severity="info" sx={{ marginTop: (theme) => theme.spacing(1.5) }}>
        <Typography variant="body2" color="info">
          Quick Tip - user permissions
        </Typography>
        {USER_ROLES.map((el) => (
          <Typography variant="body2" color="info" display="flex" gap={1} key={generateRandomId()}>
            <Typography variant="body2" fontWeight={700}>
              {el.label}:
            </Typography>
            {el.description}
          </Typography>
        ))}
      </Alert>
    </Box>
  );
};

export default TeamSetup;
