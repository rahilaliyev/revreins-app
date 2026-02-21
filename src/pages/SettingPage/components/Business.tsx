import { type JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { colorPalette } from 'src/theme/colorpalette';

import { Box, Button, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import { CustomModal, CustomTextField } from 'src/components';
import { CustomFormProvider } from 'src/components/form/CustomFormProvider';

import { StyledDangerZone } from '../styled';
import { type TBusinessFormData, validationBusinessSchema } from '../validationSchema';

const PERMANENTLY_DELETE_DATAS = [
  'All revenue forecasts',
  'Historical data',
  'Models and scenarios',
  'Reports and exports',
  'Connected integrations',
];

const Business = (): JSX.Element => {
  const [isDeleting, setIsDeleting] = useState(false);

  const formBag = useForm<TBusinessFormData>({
    resolver: zodResolver(validationBusinessSchema),
    defaultValues: {
      workspaceName: '',
      workspaceUrl: '',
    },
  });

  const handleClose = (): void => setIsDeleting(false);

  const handleSubmit = (values: TBusinessFormData): void => {};

  return (
    <Box p={8}>
      <Typography variant="subtitle1" fontWeight={600}>
        Business Settings
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.25}>
        Manage your workspace details.
      </Typography>
      <CustomFormProvider form={formBag} onSubmit={handleSubmit}>
        <Grid container spacing={4} maxWidth={672} my={8}>
          <Grid size={12}>
            <CustomTextField name="workspaceName" label="Workspace Name" placeholder="RevReins.io" />
          </Grid>
          <Grid size={12}>
            <CustomTextField
              name="workspaceUrl"
              label="Workspace URL"
              placeholder="myworkspace"
              slotProps={{
                input: {
                  startAdornment: (
                    <Typography
                      variant="body2"
                      sx={{
                        background: colorPalette.secondary.main,
                        borderRadius: (theme) => theme.spacing(1),
                      }}
                      p={[2.5, 1.5]}
                      mr={3}
                    >
                      revreins.io/
                    </Typography>
                  ),
                },
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" color="inherit">
          Save Changes
        </Button>
      </CustomFormProvider>
      <Box mt={8}>
        <Typography color="error" variant="subtitle1" fontWeight={600}>
          Danger Zone
        </Typography>
        <StyledDangerZone>
          <Typography variant="body2" color="error">
            Delete Workspace
          </Typography>
          <Typography variant="body2" color="error" mt={1} mb={4}>
            Permanently delete this workspace and all associated data.
          </Typography>
          <Button color="error" onClick={() => setIsDeleting(true)}>
            Delete Workspace
          </Button>
        </StyledDangerZone>
      </Box>
      <CustomModal
        open={isDeleting}
        title="Delete Workspace"
        onClose={handleClose}
        onSubmit={() => {}}
        customDialogAction={
          <Stack justifyContent="flex-end" gap={3} width="100%">
            <Button color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="error" onClick={() => {}}>
              Delete Workspace
            </Button>
          </Stack>
        }
      >
        <Box py={4} px={6}>
          <Typography variant="h6" mb={2} color="error">
            Are you sure that you want to delete{' '}
            <Typography variant="h6" fontWeight={700}>
              your workspace?
            </Typography>
          </Typography>
          <Box my={6}>
            <Typography color="text.secondary">This action will permanently delete:</Typography>
            <List
              disablePadding
              sx={{
                listStyleType: 'disc',
                pl: 5,
                '& .MuiListItem-root': { display: 'list-item' },
              }}
            >
              {PERMANENTLY_DELETE_DATAS.map((text) => (
                <ListItem disablePadding key={text}>
                  <ListItemText sx={{ marginLeft: (theme) => theme.spacing(-2.5) }}>
                    <Typography color="text.secondary" variant="body1" fontWeight={700}>
                      {text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          <Typography variant="caption1" color="text.secondary" component="p">
            You will be able to restore it within 7 days. After that time all the data will be permanently
            removed.
          </Typography>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default Business;
