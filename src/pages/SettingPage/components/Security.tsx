import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { VALIDATION_REQUIREMENTS } from 'src/contants';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TSecurityFormData, validationSecuritySchema } from '../validationSchema';

const Security = (): JSX.Element => {
  const formBag = useForm<TSecurityFormData>({
    resolver: zodResolver(validationSecuritySchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = (values: TSecurityFormData): void => {};

  return (
    <Box p={8}>
      <Typography variant="subtitle1" fontWeight={600}>
        Security
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.25}>
        Manage your password and security settings.
      </Typography>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Box my={8}>
          <Typography variant="subtitle1" mb={4} fontWeight={600}>
            Change Password
          </Typography>
          <Stack ml={3} gap={4} flexDirection="column" alignItems="flex-start" maxWidth={672}>
            <CustomTextField
              name="oldPassword"
              label="Old Password"
              placeholder="*******"
              type="password"
              helperText={
                <Typography variant="caption2">
                  Don’t remember the old password?{' '}
                  <Link to="#">
                    <Typography color="info" variant="caption2">
                      Click here to send a reset link to your email.
                    </Typography>
                  </Link>
                </Typography>
              }
            />

            <CustomTextField
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="*******"
              helperContent={
                <Box>
                  <Typography component="p" variant="caption2" color="textSecondary">
                    Password must include:
                  </Typography>
                  <List
                    disablePadding
                    sx={{
                      listStyleType: 'disc',

                      pl: 5,
                      '& .MuiListItem-root': {
                        display: 'list-item',
                        color: colorPalette.text.secondary,
                        fontSize: '10px',
                      },
                    }}
                  >
                    {VALIDATION_REQUIREMENTS.map((text, key) => (
                      <ListItem disablePadding key={key}>
                        <ListItemText sx={{ margin: 0, marginLeft: (theme) => theme.spacing(-2.5) }}>
                          <Typography component="p" variant="caption2" color="textSecondary">
                            {text}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  <Typography mt={3} variant="caption2" component="p" color="textSecondary">
                    Password must be at least 12 symbols long.
                  </Typography>
                </Box>
              }
            />
            <CustomTextField
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              placeholder="*******"
            />
          </Stack>
        </Box>
        <Button type="submit" color="inherit">
          Save Changes
        </Button>
      </CustomFormProvider>
    </Box>
  );
};

export default Security;
