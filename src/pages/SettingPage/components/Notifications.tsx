import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CustomSwitchField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { type TNotificationFormData, validationNotificationSchema } from '../validationSchema';

const Notifications = (): JSX.Element => {
  const formBag = useForm<TNotificationFormData>({
    resolver: zodResolver(validationNotificationSchema),
    defaultValues: {
      projectNews: true,
      generalNotifications: true,
      notifyEmail: true,
      projectNotifications: true,
    },
  });
  const handleSubmit = (values: TNotificationFormData): void => {};

  return (
    <Box p={8}>
      <Typography variant="subtitle1" fontWeight={600}>
        Notifications
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.25}>
        Choose how you receive updates.
      </Typography>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Box my={8}>
          <Typography variant="subtitle1" mb={4} fontWeight={600}>
            Notification types
          </Typography>
          <Stack ml={3} gap={4} flexDirection="column" alignItems="flex-start">
            <Stack>
              <CustomSwitchField name="projectNotifications" />
              <Box ml={3}>
                <Typography variant="body2">Project Notifications</Typography>
                <Typography variant="body2" color="text.secondary">
                  Notify me when there’s a change to a project I created or edited.
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <CustomSwitchField name="generalNotifications" />
              <Box ml={3}>
                <Typography variant="body2">General Notifications</Typography>
                <Typography variant="body2" color="text.secondary">
                  Notify me when there’s a change to the platform.{' '}
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <CustomSwitchField name="projectNews" />
              <Box ml={3}>
                <Typography variant="body2">Product news</Typography>
                <Typography variant="body2" color="text.secondary">
                  Notify me about product news and updates.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box my={8}>
          <Typography variant="subtitle1" mb={4} fontWeight={600}>
            Email notifications
          </Typography>
          <Stack ml={3}>
            <CustomSwitchField name="notifyEmail" />
            <Box ml={3}>
              <Typography variant="body2">Notify me on email</Typography>
              <Typography variant="body2" color="text.secondary">
                Don’t miss important updates. Receive your notifications by email.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Button type="submit" color="inherit">
          Save Changes
        </Button>
      </CustomFormProvider>
    </Box>
  );
};

export default Notifications;
