import api from './api';
import { Supplier } from '@/types';
import { queryClient } from './queryClient';

const SUPPLIER_QUERY_KEY = 'supplier';

export const fetchSuppliers = async (): Promise<Supplier> => {
  const response = await api.get('/suppliers');
  return response.data;
};

export const fetchSupplierById = async (id: number): Promise<Supplier> => {
  const response = await api.get(`/suppliers/${id}`);
  return response.data;
};

export const createSupplier = async (data: Supplier): Promise<Supplier> => {
  const response = await api.post('/suppliers', data);
  return response.data;
};

export const updateSupplier = async (data: Supplier, id: string): Promise<Supplier> => {
  if (!id) throw new Error('Id é necessário');
  const response = await api.put(`/suppliers/${id}`, data);
  return response.data;
};

export const deleteSupplier = async (id: string): Promise<void> => {
  if (!id) throw new Error('Id é necessário');

  try {
    await api.delete(`/suppliers/${id}`);
    queryClient.invalidateQueries({ queryKey: [SUPPLIER_QUERY_KEY] });
  } catch (error) {
    console.error('Erro ao deletar usuário: ', error);
    throw new Error('Erro ao deletar o usuário');
  }
};
