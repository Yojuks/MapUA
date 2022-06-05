import React, { FC } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';

interface Props {
  open?: boolean | undefined;
  notification?: string | {} | null;
  onClose?: any;
  severity?: AlertColor | undefined;
}
const defaultProps: Props = {
  open: false,
  notification: null,
  onClose: undefined,
  severity: 'error'
};

const ExtendSnackbar: FC<Props> = ({
  open,
  notification,
  onClose,
  severity
}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    sx={{ zIndex: 10000 }}
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
  >
    <Alert onClose={onClose} severity={severity} sx={{ mt: '1vh' }}>
      {notification}
    </Alert>
  </Snackbar>
);

ExtendSnackbar.defaultProps = defaultProps;

export default ExtendSnackbar;
