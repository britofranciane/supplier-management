import React from 'react';
import { IconButton } from '@mui/material';
import { DeleteOutlineOutlined, Add } from '@mui/icons-material';
import { CustomTextField, CustomButton } from '@/components';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ContainerContact, ContainerFields, ContainerFieldsBasics } from './styles';
import { formatPhoneNumber } from '@/utils';
import { Supplier } from '@/types';

interface ContactFormProps {
  register: UseFormRegister<FieldValues | any>;
  fields: any[];
  errors: FieldErrors<Supplier>;
  append: (value: FieldValues | any) => void;
  remove: (index: number) => void;
  setValue: UseFormSetValue<Supplier | any>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  errors,
  append,
  remove,
  setValue,
  register,
}) => {
  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const formattedPhone = formatPhoneNumber(event.target.value);
    setValue(`contacts.${index}.phone`, formattedPhone);
  };

  return (
    <ContainerFieldsBasics>
      {fields.map(({ id }: { id: number }, i: number) => (
        <ContainerContact key={id}>
          <ContainerFields>
            <CustomTextField
              required
              name={`contacts.${i}.nameContact`}
              label={'Nome Contato'}
              register={register}
              errorMessage={
                errors.contacts && errors.contacts[i] && errors.contacts[i].nameContact
                  ? errors.contacts[i].nameContact.message
                  : undefined
              }
              errors={errors}
            />

            <CustomTextField
              required
              name={`contacts.${i}.phone`}
              errorMessage={
                errors.contacts && errors.contacts[i] && errors.contacts[i].phone
                  ? errors.contacts[i].phone.message
                  : undefined
              }
              label={'Telefone'}
              register={register}
              errors={errors}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePhoneChange(e, i)
              }
            />
          </ContainerFields>
          {fields.length > 1 && (
            <IconButton onClick={() => remove(i)}>
              <DeleteOutlineOutlined />
            </IconButton>
          )}
        </ContainerContact>
      ))}
      <div>
        <CustomButton
          onClick={() => append({ nameContact: '', phone: '' })}
          startIcon={<Add />}
        >
          Adicionar Contato
        </CustomButton>
      </div>
    </ContainerFieldsBasics>
  );
};
