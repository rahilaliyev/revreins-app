import React, { Fragment, type JSX, type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { USER_ROLES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import { EUserRole } from 'src/types/enums';
import type { IInvitingMembers } from 'src/types/interfaces';

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TSecondStepFormData, validationSecondStepSchema } from './validationSchema';

import { AddFillIcon, ArrowDownFillIcon, DeleteBin7LineIcon, InformationLineIcon } from 'src/assets/icons';

const SecontStep = (): JSX.Element => {
  const [selectedRole, setSelectedRole] = useState<EUserRole>(EUserRole.USER);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [invitingMembers, setInvitingMembers] = useState<IInvitingMembers[]>([]);
  const open = Boolean(anchorEl);

  const formBag = useForm<TSecondStepFormData>({
    resolver: zodResolver(validationSecondStepSchema),
    defaultValues: { email: '', type: '' },
  });

  const handleSubmit = ({ email }: TSecondStepFormData): void => {
    setInvitingMembers((prev) => [
      ...prev,
      {
        email,
        type: selectedRole,
      },
    ]);
    setSelectedRole(EUserRole.USER);
    formBag.reset();
  };

  const handleDelete = (key: number): void => {
    setInvitingMembers((prev) => prev.filter((_, index) => index !== key));
  };

  const handleOpen = (event: MouseEvent<HTMLButtonElement>): void => setAnchorEl(event.currentTarget);

  const handleClose = (value: EUserRole): void => {
    setAnchorEl(null);
    setSelectedRole(value);
  };

  return (
    <Box pt={2}>
      <Box>
        <Typography variant="h6" fontWeight={500}>
          Manage your team
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Add your team to collaborate on forecasts. An invite will be sent to the email entered below. To see
          more information on user roles check the{' '}
          <Typography display="inline" component="span" variant="body1" sx={{ textDecoration: 'underline' }}>
            User roles permissions table
          </Typography>
        </Typography>
      </Box>
      <Box py={6}>
        <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
          <Stack gap={2} mb={4} alignItems="flex-start">
            <CustomTextField size="small" name="email" placeholder="example@user.com" type="email" />
            <Box position="relative">
              <Button
                color="secondary"
                endIcon={<ArrowDownFillIcon />}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
              >
                {USER_ROLES.find((el) => el.value === selectedRole)?.label}
              </Button>
              <Menu
                sx={{ py: 0.75 }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                slotProps={{
                  list: {
                    'aria-labelledby': 'basic-button',
                  },
                }}
              >
                {USER_ROLES.map((el, key) => (
                  <MenuItem
                    key={key}
                    onClick={() => handleClose(el.value)}
                    sx={{
                      padding: 0,
                      '&:not(:last-child)': {
                        mb: 3,
                      },
                    }}
                  >
                    <Stack justifyContent="space-between" width="100%">
                      <Stack
                        alignItems="flex-start"
                        flexDirection="column"
                        sx={{ width: (theme) => `calc(100% - ${theme.spacing(10.5)})` }}
                      >
                        <Typography variant="body2" mb={0.5} color="textPrimary">
                          {el.label}
                        </Typography>
                        <Typography variant="caption3" color="textSecondary" whiteSpace="break-spaces">
                          {el.description}
                        </Typography>
                      </Stack>
                      <Radio
                        checked={selectedRole === el.value}
                        value={el.value}
                        name="radio-buttons"
                        slotProps={{
                          input: {
                            'aria-label': el.value,
                          },
                        }}
                      />
                    </Stack>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            endIcon={<AddFillIcon pathFill={colorPalette.primary.main} />}
          >
            Invite Member
          </Button>
        </CustomFormProvider>
      </Box>
      <Box>
        <Stack justifyContent="space-between" alignItems="center">
          <Typography variant="body1">Your Team</Typography>
          <Typography variant="body2" color="textSecondary">
            {invitingMembers.length + 1}/15
          </Typography>
        </Stack>
        <List>
          <ListItem sx={{ py: 1, px: 3 }}>
            <Stack width="70%">
              <ListItemAvatar>
                <Avatar>R</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Robert Fox (You)" secondary="example@example.com" />
            </Stack>
            <Stack width="30%">
              <Chip
                variant="outlined"
                label={
                  <Typography variant="caption2" sx={{ marginLeft: '0 !important' }}>
                    Owner
                    <Tooltip title="" placement="bottom-start">
                      <IconButton sx={{ marginLeft: 1 }}>
                        <InformationLineIcon width={16} height={16} />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                }
                size="small"
              />
            </Stack>
          </ListItem>
          <Divider />
          {invitingMembers?.map((el, key) => (
            <Fragment key={key}>
              <ListItem sx={{ py: 1, px: 3 }}>
                <Stack width="70%">
                  <ListItemAvatar>
                    <Avatar>{el.email?.[0]?.toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={el.email} />
                </Stack>
                <Stack width="30%" justifyContent="space-between">
                  <Chip
                    variant="outlined"
                    label={
                      <Typography variant="caption2" sx={{ marginLeft: '0 !important' }}>
                        {USER_ROLES.find((data) => data.value === el.type)?.label}
                        <Tooltip
                          placement="bottom-start"
                          title={USER_ROLES.find((data) => data.value === el.type)?.description}
                        >
                          <IconButton sx={{ marginLeft: 1 }}>
                            <InformationLineIcon width={16} height={16} />
                          </IconButton>
                        </Tooltip>
                      </Typography>
                    }
                    size="small"
                  />
                  <Box width={32}>
                    <ListItemButton
                      sx={{ justifyContent: 'center', px: 0 }}
                      onClick={() => handleDelete(key)}
                    >
                      <DeleteBin7LineIcon width={16} height={16} pathFill={colorPalette.other.icon} />
                    </ListItemButton>
                  </Box>
                </Stack>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SecontStep;
