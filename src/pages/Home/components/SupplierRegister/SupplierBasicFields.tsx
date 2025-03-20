import React from 'react';
import { CustomTextField } from '@/components';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ContainerFieldsBasics } from './styles';

interface Props {
  register: UseFormRegister<FieldValues | any>;
  errors: any;
}

const SupplierBasicFields: React.FC<Props> = ({ register, errors }) => {
  const dataBasicFields = [
    { name: 'name', label: 'Nome', required: true },
    { name: 'email', label: 'E-mail', required: true },
    {
      name: 'description',
      label: 'Descrição',
      props: { multiline: true, rows: 4 },
    },
  ];

  return (
    <ContainerFieldsBasics>
      {dataBasicFields.map(({ name, label, props, required }) => (
        <CustomTextField
          required={required}
          name={name}
          label={label}
          register={register}
          errors={errors}
          {...props}
        />
      ))}
    </ContainerFieldsBasics>
  );
};

export default SupplierBasicFields;
