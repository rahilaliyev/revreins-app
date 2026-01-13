import type { JSX } from 'react';
import { colorPalette } from 'src/theme/colorpalette';

import { Alert, Box, Divider, Stack, Typography } from '@mui/material';

import { CustomDatePickerField, CustomSelectField, CustomTextField } from 'src/components';

import { InformationLineIcon } from 'src/assets/icons';

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
      <CustomSelectField
        name="crmObject"
        items={[{ value: 'Lead', label: 'Lead' }]}
        label="CRM Object"
        helperText="Select the Salesforce object to query"
        size="small"
        sx={{
          height: (theme) => theme.spacing(9),
          background: '#F3F3F5',
        }}
      />
      <CustomDatePickerField
        name="dateField"
        label="Date Field"
        helperText="Date field to use for time-based filtering"
        sx={{
          height: (theme) => theme.spacing(9),
          overflow: 'none',
          '& .MuiPickersInputBase-root': {
            background: '#F3F3F5',
            height: (theme) => theme.spacing(9),
          },
        }}
      />
    </Stack>
    <Divider sx={{ my: 6 }} />
    <Alert icon={<InformationLineIcon pathFill={colorPalette.info.main} />} severity="info">
      <Typography fontWeight={500}>Quick Tip</Typography>
      <Typography>
        After setting up the basic configuration, switch to the &quot;Filter Conditions&quot; tab to add
        advanced filtering logic.
      </Typography>
    </Alert>
  </Box>
);

export default BasicSetupTab;
