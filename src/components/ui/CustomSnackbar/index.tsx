import { forwardRef, type JSX, memo } from 'react';
import { closeSnackbar, type CustomContentProps, SnackbarContent, type VariantType } from 'notistack';

import { Box, IconButton, Typography } from '@mui/material';

import { StyledSnackbar } from './styled';

import {
  CheckboxCircleFillIcon,
  CloseCircleFillIcon,
  CloseLineIcon,
  InformationFillIcon,
} from 'src/assets/icons';

export const CustomSnackbar = memo(
  forwardRef<HTMLDivElement, CustomContentProps>((props, forwardedRef) => {
    const { message, variant } = props;

    const SNACKBAR_ICON: Record<VariantType, JSX.Element> = {
      success: <CheckboxCircleFillIcon width={20} height={20} pathFill="white" />,
      error: <CloseCircleFillIcon width={20} height={20} pathFill="white" />,
      warning: <InformationFillIcon width={20} height={20} pathFill="white" />,
      info: <InformationFillIcon width={20} height={20} pathFill="white" />,
      default: <InformationFillIcon width={20} height={20} pathFill="white" />,
    };

    return (
      <SnackbarContent ref={forwardedRef}>
        <StyledSnackbar variant={variant}>
          <Box display="flex" alignItems="flex-start" mr={2}>
            {SNACKBAR_ICON[variant]}
          </Box>
          <Typography variant="body2" fontWeight={600} sx={{ width: 'calc(100% - 40px)' }}>
            {message}
          </Typography>
          <IconButton
            sx={{ marginLeft: 4, alignItems: 'flex-start', height: 20 }}
            onClick={() => closeSnackbar(props.id)}
          >
            <CloseLineIcon width={20} height={20} pathFill="white" />
          </IconButton>
        </StyledSnackbar>
      </SnackbarContent>
    );
  }),
);
