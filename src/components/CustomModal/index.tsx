import React from 'react';
import { Modal, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ContainerModal, ContainerHead } from './styles';
import Text from '../Text/styles';
interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

const CustomModal: React.FC<Props> = ({ open, onClose, title, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ContainerModal>
        <ContainerHead>
          <Text variant="title">{title}</Text>
          <IconButton onClick={onClose} style={{ padding: 0 }}>
            <CloseIcon />
          </IconButton>
        </ContainerHead>
        <Divider sx={{ marginBottom: 1 }} />
        {children}
      </ContainerModal>
    </Modal>
  );
};

export default CustomModal;
