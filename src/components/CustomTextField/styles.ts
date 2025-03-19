import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ContainerTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xxs};
`;

export const StyledLabel = styled.label<{ required?: boolean }>`
  &:after {
    content: ${({ required }) => (required ? '" *"' : '""')};
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const StyledTextField = styled(TextField)`
  border-radius: ${(props) => props.theme.spacing.sm};
  & .MuiOutlinedInput-notchedOutline {
    border-radius: ${(props) => props.theme.spacing.sm};
  }
`;
