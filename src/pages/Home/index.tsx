import React, { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { Head, Box, CustomDialog } from '@/components';
import { deleteSupplier, fetchSuppliers } from '@/services';
import SupplierTable from './components/SupplierTable';
import SupplierRegister from './components/SupplierRegister';
import { Supplier, Contact } from '@/types';
import { formatPhoneNumber } from '@/utils';
import { saveAs } from 'file-saver';
import { useToast } from '@/hooks';

const Home: React.FC = () => {
  const queryClient = useQueryClient();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { showToast } = useToast();

  const {
    data: suppliers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['suppliers'],
    queryFn: fetchSuppliers,
  });
  const deleteMutation = useMutation({
    mutationFn: deleteSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      showToast('Usuário deletado com sucesso!', 'success');
    },
    onError: (error: Error) => {
      console.error('Erro ao deletar o usuário:', error);
      showToast('Erro ao deletar o usuário', 'error');
    },
  });

  const handleConfirmDelete = async () => {
    if (selectedUserId) {
      await deleteMutation.mutateAsync(selectedUserId);
      setDeleteDialogOpen(false);
      setSelectedUserId(null);
      refetch();
    }
  };

  const handleDeleteClick = (id: number) => {
    setSelectedUserId(id);
    setDeleteDialogOpen(true);
  };

  const handleSubmitForm = () => {
    refetch();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredSuppliers: Supplier[] = suppliers?.filter((supplier: Supplier) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      supplier.name.toLowerCase().includes(searchLower) ||
      supplier.description.toLowerCase().includes(searchLower) ||
      supplier.contacts.some((contact: Contact) =>
        contact.nameContact.toLowerCase().includes(searchLower),
      ) ||
      `${supplier?.address?.street}, ${supplier?.address?.number}, ${supplier?.address?.city} - ${supplier?.address?.state}, ${supplier?.address?.cep}`
        .toLowerCase()
        .includes(searchLower)
    );
  });

  const handleExportCSV = () => {
    const csvContent = [
      ['Nome', 'Descrição', 'Contato', 'Endereço'],
      ...suppliers?.map((supplier: Supplier) => [
        supplier.name,
        supplier.description,
        supplier.contacts
          .map((c: Contact) => `${c.nameContact}: ${formatPhoneNumber(c.phone)}`)
          .join(' | '),
        `${supplier.street}, ${supplier.number}, ${supplier.city} - ${supplier.state}, ${supplier?.cep}`,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'fornecedores.csv');
  };

  return (
    <Box>
      <Head
        buttonContent={'Cadastrar'}
        onClickButton={() => setIsDrawerOpen(true)}
        value={searchTerm}
        onChange={handleSearchChange}
        handleExportCSV={handleExportCSV}
      />
      <SupplierRegister
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        handleSubmitForm={handleSubmitForm}
        selectedUserId={selectedUserId!}
        setSelectedUserId={setSelectedUserId}
      />

      <SupplierTable
        rows={filteredSuppliers || []}
        isLoading={isLoading}
        handleDeleteClick={handleDeleteClick}
        setIsDrawerOpen={setIsDrawerOpen}
        setSelectedUserId={setSelectedUserId}
      />

      <CustomDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title={'Confirmar Exclusão'}
        message={'Tem certeza que deseja excluir este fornecedor?'}
      />
    </Box>
  );
};

export default Home;
