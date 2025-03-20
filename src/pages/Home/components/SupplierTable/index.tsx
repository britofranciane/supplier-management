import React from 'react';
import { CustomDataGrid } from '@/components';
import { useMediaQuery, Skeleton, Tooltip, IconButton } from '@mui/material';
import {
  DeleteOutlineOutlined,
  ModeEditOutlineOutlined,
  Visibility,
} from '@mui/icons-material';
import { GridColDef } from '@mui/x-data-grid';
import { Supplier } from '@/types';
import SupplierDetailsModal from '../SupplierDetailsModal';

interface Props {
  rows: Supplier[];
  isLoading: boolean;
  handleDeleteClick: (id: number) => void;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  setSelectedUserId: (selectedUserId: number) => void;
}

const SupplierTable: React.FC<Props> = ({
  rows,
  isLoading,
  handleDeleteClick,
  setIsDrawerOpen,
  setSelectedUserId,
}) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [selectedSupplier, setSelectedSupplier] = React.useState<Supplier | null>(null);

  const handleOpenDetailsModal = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 200 : undefined,
      sortable: false,
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? <Skeleton /> : <span style={{ fontWeight: 600 }}>{row.name}</span>,
      type: 'string',
    },
    {
      field: 'description',
      headerName: 'Descrição',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 200 : undefined,
      sortable: false,
      type: 'string',
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? <Skeleton /> : <span>{row.description}</span>,
    },
    {
      field: 'address',
      headerName: 'Endereço',
      flex: isMobile ? undefined : 1,
      width: isMobile ? 220 : undefined,
      sortable: false,
      type: 'string',
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <div>{`${row?.street}, ${row?.number} - ${row?.city}`}</div>
        ),
    },
    {
      field: 'view',
      headerName: '',
      width: 40,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <Tooltip title="Visualizar Detalhes">
            <IconButton onClick={() => handleOpenDetailsModal(row)}>
              <Visibility />
            </IconButton>
          </Tooltip>
        ),
    },
    {
      field: 'edit',
      headerName: '',
      width: 40,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <Tooltip title="Editar">
            <IconButton
              onClick={() => {
                row.id && setSelectedUserId(row.id);
                setIsDrawerOpen(true);
              }}
            >
              <ModeEditOutlineOutlined />
            </IconButton>
          </Tooltip>
        ),
    },
    {
      field: 'delete',
      headerName: '',
      width: 40,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: Supplier }) =>
        isLoading ? (
          <Skeleton />
        ) : (
          <Tooltip title="Excluir">
            <IconButton onClick={() => handleDeleteClick(row.id as number)}>
              <DeleteOutlineOutlined />
            </IconButton>
          </Tooltip>
        ),
    },
  ];

  return (
    <>
      <CustomDataGrid
        isLoading={isLoading}
        rows={rows}
        columns={columns.filter(
          (col) => !(isMobile && ['description', 'address'].includes(col.field)),
        )}
      />
      <SupplierDetailsModal
        open={openDetailsModal}
        onClose={handleCloseDetailsModal}
        supplier={selectedSupplier}
      />
    </>
  );
};

export default SupplierTable;
