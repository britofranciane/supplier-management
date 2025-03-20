import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { ContainerContent, StyledButton } from './styles';

interface Props extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CustomButton({ onClick, children, ...rest }: Props) {
  return (
    <StyledButton onClick={onClick} {...rest} sx={{ borderRadius: '0.5rem' }}>
      <ContainerContent>{children}</ContainerContent>
    </StyledButton>
  );
}

export default CustomButton;
