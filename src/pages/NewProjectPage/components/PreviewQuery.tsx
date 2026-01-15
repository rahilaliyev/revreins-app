import type { JSX } from 'react';
import { Editor } from '@monaco-editor/react';

import { Box, Stack, Typography } from '@mui/material';

import { StyledPreviewQueryWrapper } from '../styled';

const PreviewQuery = (): JSX.Element => (
  <StyledPreviewQueryWrapper>
    <Stack>
      <Typography variant="body1" fontWeight={500} mb={2.5}>
        Generated Query Preview
      </Typography>
    </Stack>
    <Box>
      <Editor
        height={200}
        defaultLanguage="sql"
        defaultValue={`SELECT
      Id, Created_Date, *
FROM
      Lead`}
      />
    </Box>
  </StyledPreviewQueryWrapper>
);

export default PreviewQuery;
