import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMount } from '../../hooks/useMount';

type ConfirmModalProps = {
  isOpen: boolean;
  toggle: () => void;
  toggleWithAction: () => void;
};

const ConfirmModal = ({
  isOpen,
  toggle,
  toggleWithAction,
}: ConfirmModalProps): JSX.Element | null => {
  const mounted = useMount(isOpen);

  if (!mounted) {
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

export default ConfirmModal;
