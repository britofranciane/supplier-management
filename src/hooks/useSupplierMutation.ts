import { useMutation } from '@tanstack/react-query';
import { createSupplier, updateSupplier } from '@/services';
import { Supplier } from '@/types';
import { useToast } from '@/hooks/useToast';

export const useSupplierMutation = (
  handleSubmitForm: () => void,
  selectedUserId?: number,
) => {
  const { showToast } = useToast();

  const commonConfig = {
    onSuccess: () => {
      showToast(
        `Fornecedor ${selectedUserId ? 'atualizado' : 'criado'} com sucesso!`,
        'success',
      );
      handleSubmitForm();
    },
    onError: () => {
      showToast(
        `Erro ao ${selectedUserId ? 'atualizar' : 'criar'} o fornecedor. Tente novamente.`,
        'error',
      );
    },
  };

  const createMutation = useMutation<Supplier, Error, Supplier>({
    mutationFn: createSupplier,
    ...commonConfig,
  });

  const updateMutation = useMutation({
    mutationFn: (data: Supplier) => updateSupplier(data, selectedUserId!),
    ...commonConfig,
  });

  const mutate = (data: Supplier) => {
    if (selectedUserId) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  return { mutate };
};
