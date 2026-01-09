import type { JSX } from 'react';

import { Box, Divider, Stack } from '@mui/material';

import { CustomSelectField, CustomTextField } from 'src/components';

const BasicSetupTab = (): JSX.Element => (
  <Box mt={4}>
    <CustomTextField
      name="name"
      label="Stage name"
      helperText="Give this stage a descriptive name"
      size="small"
      sx={{
        '& .MuiInputBase-root': {
          height: (theme) => theme.spacing(9),
        },
        '& .MuiFormHelperText-root': { mt: 2 },
      }}
    />
    <Divider sx={{ my: 6 }} />
    <Stack gap={6}>
      <CustomSelectField name="crmObject" items={[{ value: 'Lead', label: 'Lead' }]} />
    </Stack>
  </Box>
);

export default BasicSetupTab;
