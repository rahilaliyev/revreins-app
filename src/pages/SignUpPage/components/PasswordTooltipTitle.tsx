import type { JSX } from 'react';

import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const VALIDATION_REQUIREMENTS = [
  'Uppercase letters (A–Z)',
  'Lowercase letters (a–z)',
  'Numbers (0–9)',
  'Special characters (e.g., !@#$%^&*())',
];

export const TooltipTitle = (): JSX.Element => (
  <Box>
    <Typography variant="caption2">Password must include:</Typography>
    <List
      disablePadding
      sx={{
        listStyleType: 'disc',
        pl: 5,
        '& .MuiListItem-root': { display: 'list-item' },
      }}
    >
      {VALIDATION_REQUIREMENTS.map((text, key) => (
        <ListItem disablePadding key={key}>
          <ListItemText sx={{ marginLeft: (theme) => theme.spacing(-2.5) }}>
            <Typography variant="caption2">{text}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
    <br />
    <Typography variant="caption2">Password must be at least 12 symbols long.</Typography>
  </Box>
);
