import { type JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import { CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';
import { ROUTES } from 'src/routes/paths';

import { StyledSignInButton } from '../SignInPage/styled';

import { type TFormData, validationSchema } from './validationSchema';

import { ArrowGoBackLineIcon } from 'src/assets/icons';
import Logo from 'src/assets/images/logo.svg?react';

const VALIDATION_REQUIREMENTS = [
  'Uppercase letters (A–Z)',
  'Lowercase letters (a–z)',
  'Numbers (0–9)',
  'Special characters (e.g., !@#$%^&*())',
];

const ResetPasswordPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const formBag = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const handleSubmit = (data: TFormData): void => {
    setIsSuccess(true);
  };

  const handleNavigateToLogin = (): void => {
    navigate(ROUTES.AUTH.SIGNIN.PATH);
  };

  return (
    <Stack flexDirection="column" justifyContent="center" alignItems="center" minWidth={446}>
      <Logo />
      <Stack flexDirection="column">
        <Typography mt={1.5} mb={1.5} variant="h5">
          Reset your Password
        </Typography>
        {isSuccess && (
          <Typography variant="body1" textAlign="center" color="textSecondary" width="80%">
            Your password has been changed successfully. You’ll be redirected to the login page shortly.
          </Typography>
        )}
      </Stack>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit} novalidate>
        {!isSuccess && (
          <Stack mt={6} flexDirection="column" gap={4}>
            <CustomTextField
              name="password"
              type="password"
              label="New Password"
              placeholder="******"
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
              type="password"
              label="Confirm New Password"
              placeholder="******"
            />
          </Stack>
        )}
        <Stack gap={6} justifyContent="center" mt={8}>
          <StyledSignInButton
            color="secondary"
            endIcon={<ArrowGoBackLineIcon />}
            onClick={handleNavigateToLogin}
          >
            Back to Login
          </StyledSignInButton>
          {!isSuccess && (
            <Button color="inherit" type="submit">
              Reset Password
            </Button>
          )}
        </Stack>
      </CustomFormProvider>
    </Stack>
  );
};

export default ResetPasswordPage;
