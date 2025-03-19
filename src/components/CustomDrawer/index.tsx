import React, { useCallback } from 'react';
import { Drawer, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { StyledBox, ContainerHead } from './styles';
import Text from '../Text/styles';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<Props> = ({ open, onClose, title, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <StyledBox>
        <ContainerHead>
          <Text variant="title">{title}</Text>
          <hr />
          <IconButton onClick={handleClose} style={{ padding: 0 }}>
            <Close />
          </IconButton>
        </ContainerHead>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </StyledBox>
    </Drawer>
  );
};

export default CustomDrawer;
