import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Dialog } from '@mui/material';
import CustomButton from '@/components/CustomButton';
import Text from '../Text/styles';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const CustomDialog: React.FC<Props> = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="confirmation-dialog-title">
      <DialogTitle id="confirmation-dialog-title">
        <Text variant="title" id="confirmation-dialog-title">
          {title}
        </Text>
      </DialogTitle>
      <DialogContent>
        <Text variant="description">{message}</Text>
      </DialogContent>
      <DialogActions sx={{ padding: '0 24px 24px' }}>
        <CustomButton onClick={onClose} variant="outlined">
          Cancelar
        </CustomButton>
        <CustomButton onClick={onConfirm} variant="contained">
          Confirmar
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
