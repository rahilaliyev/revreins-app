import { colorPalette } from 'src/theme/colorpalette';

import { Stack, styled } from '@mui/material';

export const StyledHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  borderTop: `1px solid ${colorPalette.primary.bgSecondary}`,
  borderBottom: `1px solid ${colorPalette.other.stroke}`,
  padding: theme.spacing(2, 3),
  background: colorPalette.background.main,
}));
