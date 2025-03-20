import { CustomButton } from '@/components/index';
import { HeadContainer, ContainerSearch, ContainerButton } from './styles';
import { InputAdornment, TextField, Tooltip, useMediaQuery } from '@mui/material';
import { CloudDownload, Search } from '@mui/icons-material';

interface Props {
  buttonContent: string;
  onClickButton: () => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleExportCSV: () => void;
}

const Head: React.FC<Props> = ({
  onClickButton,
  buttonContent,
  value,
  onChange,
  handleExportCSV,
}) => {
  const isTabletOrLess = useMediaQuery('(max-width:1024px)');

  return (
    <HeadContainer>
      <ContainerSearch>
        <TextField
          size="small"
          placeholder="Buscar fornecedor por nome, contato, etc."
          value={value}
          onChange={onChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            borderRadius: '8px',
            width: '100%',
            maxWidth: isTabletOrLess ? '350px' : '500px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px',
            },
          }}
        />
      </ContainerSearch>
      <ContainerSearch>
        <Tooltip title="Exportar CSV" arrow>
          <CustomButton
            size={'large'}
            color="success"
            variant="contained"
            startIcon={<CloudDownload />}
            onClick={handleExportCSV}
            style={{
              minWidth: isTabletOrLess ? 'auto' : '160px',
              padding: isTabletOrLess ? '8px' : '8px 16px',
            }}
          >
            {!isTabletOrLess ? 'Exportar CSV' : 'Export'}
          </CustomButton>
        </Tooltip>
        <ContainerButton>
          <CustomButton onClick={onClickButton} variant="contained" size={'large'}>
            {buttonContent}
          </CustomButton>
        </ContainerButton>
      </ContainerSearch>
    </HeadContainer>
  );
};

export default Head;
