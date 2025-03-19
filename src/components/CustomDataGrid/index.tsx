import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import CustomNoRowsOverlay from '@/components/CustomNoRowsOverlay';

interface Props extends DataGridProps {
  isLoading: boolean;
}

const CustomDataGrid: React.FC<Props> = ({ isLoading, rows, columns, ...props }) => {
  return (
    <DataGrid
      slots={{
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      rows={isLoading ? Array.from({ length: 5 }, (_, index) => ({ id: index + 1 })) : rows}
      columns={columns}
      rowHeight={72}
      sx={{
        borderRadius: '1rem',
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 600,
        },
        '& .MuiDataGrid-columnSeparator--resizable': {
          display: 'none',
        },
        '& .MuiDataGrid-row': {
          borderTop: '1px solid #E5E8EB',
        },
        '& .MuiDataGrid-footerContainer': {
          display: 'none',
        },
      }}
      {...props}
    />
  );
};

export default CustomDataGrid;
