import { colorPalette } from 'src/theme/colorpalette';

import { Button, styled } from '@mui/material';

export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  minWidth: theme.spacing(65),
  border: `${theme.spacing(0.25)} solid ${colorPalette.other.stroke}`,
  display: 'flex',
  gap: theme.spacing(2),
}));
