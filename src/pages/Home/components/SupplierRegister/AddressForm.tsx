import React from 'react';
import { Autocomplete } from '@mui/material';
import { CustomTextField } from '@/components';
import { State, City, Supplier } from '@/types';
import { ContainerFields } from './styles';
import { useLocationsQuery } from '@/hooks';
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
  UseFormTrigger,
} from 'react-hook-form';

interface Props {
  register: UseFormRegister<Supplier | any>;
  errors: FieldErrors<Supplier>;
  setValue: UseFormSetValue<Supplier | any>;
  watch: UseFormWatch<Supplier | any>;
  trigger: UseFormTrigger<Supplier | any>;
  formatCep: (value: string) => string;
  fetchAddressByCep: (
    cep: string,
  ) => Promise<{ uf: string; localidade: string; logradouro: string; erro?: boolean }>;
}

export const AddressForm: React.FC<Props> = ({
  register,
  errors,
  setValue,
  watch,
  trigger,
  formatCep,
  fetchAddressByCep,
}) => {
  const state = watch('state');
  const { states, cities } = useLocationsQuery(state!);

  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(event.target.value);
    setValue('cep', formattedCep);

    if (formattedCep.length !== 9) {
      resetAddressFields();
      return;
    }

    const address = await fetchAddressByCep(formattedCep.replace('-', ''));
    if (address && !address.erro) {
      setAddressFields(address.uf, address.localidade, address.logradouro);
    } else {
      resetAddressFields();
    }
    trigger('cep');
  };

  const resetAddressFields = () => {
    setAddressFields('', '', '');
  };

  const setAddressFields = (state: string, city: string, street: string) => {
    setValue('state', state);
    setValue('city', city);
    setValue('street', street);
  };

  return (
    <ContainerFields>
      <CustomTextField
        required
        name={'cep'}
        label={'CEP'}
        register={register}
        errors={errors}
        onChange={handleCepChange}
      />
      <Autocomplete
        size="small"
        options={states ?? []}
        getOptionLabel={(option) => option.acronym}
        value={states?.find((e: State) => e.acronym === state) || null}
        onChange={(_, newValue) => {
          if (newValue) setValue('state', newValue?.acronym);
        }}
        renderInput={(params) => (
          <CustomTextField
            required
            {...params}
            name={'state'}
            label={'Estado'}
            register={register}
            errors={errors}
          />
        )}
      />
      <Autocomplete
        size="small"
        options={cities ?? []}
        getOptionLabel={(option) => option.name}
        value={cities?.find((c: City) => c.name === watch('city')) || null}
        onChange={(_, newValue) => {
          if (newValue) setValue('city', newValue?.name || '');
        }}
        disabled={!state}
        renderInput={(params) => (
          <CustomTextField
            required
            {...params}
            name={'city'}
            label={'Cidade'}
            register={register}
            errors={errors}
          />
        )}
      />
      <CustomTextField
        required
        name={'street'}
        label={'Logradouro'}
        register={register}
        errors={errors}
      />
      <CustomTextField
        required
        name={'number'}
        label={'Número'}
        register={register}
        errors={errors}
      />
      <CustomTextField
        name={'reference'}
        label={'Referência'}
        register={register}
        errors={errors}
      />
    </ContainerFields>
  );
};
