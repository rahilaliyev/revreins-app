import type { JSX, ReactNode } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  type DialogProps,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';

import { LoadingButton } from '../LoadingButton';

import { CloseLineIcon } from 'src/assets/icons';

export interface IModalProps extends Omit<DialogProps, 'onClose' | 'actions'> {
  title?: string;
  onClose?: () => void;
  submitText?: string;
  customDialogAction?: ReactNode;
  loading?: boolean;
  onClickSubmitButton?: () => void;
  isSubmitButtonDisabled?: boolean;
}

export const CustomModal = (props: IModalProps): JSX.Element => {
  const {
    sx,
    open,
    title,
    onClose,
    children,
    maxWidth = 'sm',
    submitText,
    fullScreen,
    loading = false,
    customDialogAction,
    onClickSubmitButton,
    isSubmitButtonDisabled = false,
  } = props;

  const handleClose = (): void => onClose?.();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      data-testid="modal"
      maxWidth={maxWidth}
      fullWidth={true}
      fullScreen={fullScreen}
      sx={sx}
    >
      <Stack justifyContent={title ? 'space-between' : 'flex-end'} padding={[3, 5]}>
        {title && (
          <DialogTitle variant="body1" fontWeight={500}>
            {title}
          </DialogTitle>
        )}
        <IconButton className="MuiButton-close" size="small" onClick={handleClose}>
          <CloseLineIcon width={20} height={20} />
        </IconButton>
      </Stack>
      <DialogContent dividers>{children}</DialogContent>
      {customDialogAction ? (
        <DialogActions>{customDialogAction}</DialogActions>
      ) : (
        <DialogActions data-testid="modal-actions">
          <Button color="secondary" size="large" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton
            color="inherit"
            onClick={onClickSubmitButton}
            size="large"
            loading={loading}
            disabled={isSubmitButtonDisabled}
          >
            {submitText || 'Confirm'}
          </LoadingButton>
        </DialogActions>
      )}
    </Dialog>
  );
};
