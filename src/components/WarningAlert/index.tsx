import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type WarningAlertProps = {
  isOpen: boolean;
  toggle: () => void;
  toggleWithAction: () => void;
};

const WarningAlert = ({
  isOpen,
  toggle,
  toggleWithAction,
}: WarningAlertProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onClose={toggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to do it?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggle}>Cancel</Button>
        <Button onClick={toggleWithAction}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningAlert;
