import { colorPalette } from 'src/theme/colorpalette';

import { alpha, Button, styled } from '@mui/material';

export const StyledSignInButton = styled(Button)(({ theme }) => ({
  boxShadow: `0 1px 2px 0 ${alpha('#000000', 0.06)}`,
  color: colorPalette.inverted.invertedBlack,
  background: 'none',
  padding: theme.spacing(2.875, 5),
  '&:hover': {
    background: 'none',
    color: colorPalette.inverted.invertedBlack,
    boxShadow: `0 4px 20px 8px ${alpha('#000000', 0.09)}`,
  },
}));
