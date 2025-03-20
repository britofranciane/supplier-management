import React, { useEffect } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatCep } from '@/utils';
import {
  ContainerFieldsBasics,
  ContainerButtons,
  ContainerSupplierRegister,
  Form,
  ContentForm,
} from './styles';
import { CustomDrawer, CustomButton } from '@/components';
import { fetchSupplierById, fetchAddressByCep } from '@/services';
import { schemaSupplierRegister } from './schema';
import Text from '@/components/Text/styles';
import { ContactForm } from './ContactForm';
import { AddressForm } from './AddressForm';
import SupplierBasicFields from './SupplierBasicFields';
import { useQuery } from '@tanstack/react-query';
import { useSupplierMutation } from '@/hooks';
import { Contact } from '@/types';

interface FormValues {
  description?: string;
  contacts?: Contact[];
  number: string;
  name: string;
  email: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  reference?: string;
}

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  handleSubmitForm: () => void;
  selectedUserId?: number;
  setSelectedUserId: (selectedUserId: number | null) => void;
}

const SupplierRegister: React.FC<Props> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  handleSubmitForm,
  selectedUserId,
  setSelectedUserId,
}) => {
  const { data: supplierData } = useQuery({
    queryKey: ['suppliers', selectedUserId],
    queryFn: () => fetchSupplierById(selectedUserId!),
    enabled: !!selectedUserId,
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schemaSupplierRegister),
    defaultValues: {
      contacts: [{ nameContact: '', phone: '' }],
      reference: '',
      number: '',
      name: '',
      email: '',
      cep: '',
      state: '',
      city: '',
      street: '',
    },
  });

  const { mutate } = useSupplierMutation(handleSubmitForm, selectedUserId);

  useEffect(() => {
    reset({
      name: supplierData?.name || '',
      email: supplierData?.email || '',
      description: supplierData?.description || '',
      cep: supplierData?.cep || '',
      state: supplierData?.state || '',
      city: supplierData?.city || '',
      street: supplierData?.street || '',
      number: supplierData?.number || '',
      reference: supplierData?.reference || '',
      contacts: supplierData?.contacts || [{ nameContact: '', phone: '' }],
    });
  }, [supplierData, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  });

  const onSubmit: SubmitHandler<FormValues | any> = (data) => {
    mutate(data);
    setIsDrawerOpen(false);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
    setSelectedUserId(null);
    reset();
  };
  console.log('OPen', open);
  return (
    <ContainerSupplierRegister>
      <CustomDrawer
        open={isDrawerOpen}
        onClose={onClose}
        title={`${selectedUserId ? 'Atualizar' : 'Cadastrar'}  Fornecedor`}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContentForm>
            <SupplierBasicFields register={register} errors={errors} />

            <Text variant="caption">Contatos</Text>
            <ContactForm
              setValue={setValue}
              register={register}
              fields={fields}
              errors={errors}
              append={append}
              remove={remove}
            />

            <ContainerFieldsBasics>
              <Text variant="caption">Endereço</Text>
              <AddressForm
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
                trigger={trigger}
                formatCep={formatCep}
                fetchAddressByCep={fetchAddressByCep}
              />
            </ContainerFieldsBasics>
          </ContentForm>

          <ContainerButtons>
            <CustomButton variant="outlined" onClick={onClose}>
              Fechar
            </CustomButton>
            <CustomButton variant="contained" type="submit">
              {selectedUserId ? 'Atualizar' : 'Enviar'}
            </CustomButton>
          </ContainerButtons>
        </Form>
      </CustomDrawer>
    </ContainerSupplierRegister>
  );
};

export default SupplierRegister;
