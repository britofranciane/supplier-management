import * as yup from 'yup';
import { fetchAddressByCep } from '@/services';

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

export const schemaSupplierRegister = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  description: yup.string(),
  contacts: yup.array().of(
    yup.object().shape({
      nameContact: yup.string().required('Nome do contato é obrigatório'),
      phone: yup
        .string()
        .required('Telefone do contato é obrigatório')
        .matches(phoneRegex, 'Formato de telefone inválido (ex: (11) 99999-9999)'),
    }),
  ),
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .test('cep-exists', 'CEP não encontrado', async function (value) {
      if (!value || value.length !== 9) return true;

      const address = await fetchAddressByCep(value.replace('-', ''));
      return !address.erro;
    }),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  street: yup.string().required('Logradouro é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  reference: yup.string(),
});
