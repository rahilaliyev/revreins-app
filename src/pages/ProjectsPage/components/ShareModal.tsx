import { type JSX, type MouseEvent, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { USER_ROLES } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';
import type { EUserRole } from 'src/types/enums';

import { Box, Button, Grid, Menu, MenuItem, Radio, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { CustomModal, type IModalProps } from 'src/components/ui/CustomModal';

import { type TFormData, validationSchema } from './validationSchema';

import { ArrowDownFillIcon, SendPlaneLineIcon, UserLineIcon } from 'src/assets/icons';

const ShareModal = ({ open, onClose }: IModalProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<EUserRole | null>(null);

  const openMenu = Boolean(anchorEl);

  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: '', type: '' },
  });

  const email = useWatch({
    name: 'email',
    control: formBag.control,
  });

  const handleOpen = (event: MouseEvent<HTMLButtonElement>): void => setAnchorEl(event.currentTarget);

  const handleClose = (value: EUserRole): void => {
    setAnchorEl(null);
    setSelectedRole(value);
  };

  const handleSubmit = (data: TFormData): void => {};

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title="Share - Toronto Market Forecast"
      isSubmitButtonDisabled={!email}
    >
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={9}>
            <CustomTextField
              name="email"
              placeholder="Start typing a name or email..."
              slotProps={{
                input: {
                  startAdornment: <UserLineIcon pathFill={colorPalette.other.icon} />,
                },
              }}
            />
          </Grid>
          <Grid size={3}>
            <Box position="relative">
              <Button
                color="secondary"
                endIcon={<ArrowDownFillIcon />}
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleOpen}
                size="large"
              >
                {USER_ROLES.find((el) => el.value === selectedRole)?.label ?? 'Can View'}
              </Button>
              <Menu
                sx={{ py: 0.75 }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
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
                {USER_ROLES.slice(1, 3).map((el, key) => (
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
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              fullWidth
              startIcon={<SendPlaneLineIcon pathFill={colorPalette.text.textInverse2} />}
            >
              Share
            </Button>
          </Grid>
        </Grid>
      </CustomFormProvider>
      {/* <Box mt={6}>
        <Typography>Users with access to this project</Typography>
      </Box> */}
    </CustomModal>
  );
};

export default ShareModal;
