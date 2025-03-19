import React from 'react';
import { TextFieldProps } from '@mui/material';
import { ContainerTextField, StyledLabel, StyledTextField } from './styles';

interface Props extends Omit<TextFieldProps, 'error'> {
  name: string;
  register?: any;
  errors?: any;
  required?: boolean;
  errorMessage?: string;
}

const CustomTextField: React.FC<Props> = ({ errorMessage, name, register, errors, label, required, ...props }) => {
  const fieldError = errors?.[name];

  return (
    <ContainerTextField>
      <StyledLabel htmlFor={name} required={required}>
        {label}
      </StyledLabel>
      <StyledTextField
        autoComplete="new-password"
        size="small"
        {...register(name, { required: required })}
        error={!!fieldError || !!errorMessage}
        helperText={errorMessage || fieldError?.message}
        {...props}
      />
    </ContainerTextField>
  );
};

export default CustomTextField;
