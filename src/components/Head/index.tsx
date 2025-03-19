import { CustomButton } from '@/components/index';
import { HeadContainer, ContainerSearch } from './styles';
import { InputAdornment, TextField, Tooltip } from '@mui/material';
import { CloudDownload, Search } from '@mui/icons-material';

interface Props {
  buttonContent: string;
  onClickButton: () => void;
  value: string;
  onChange: () => void;
  handleExportCSV: () => void;
}

const Head: React.FC<Props> = ({ onClickButton, buttonContent, value, onChange, handleExportCSV }) => {
  return (
    <HeadContainer>
      <ContainerSearch>
        <TextField
          size="small"
          placeholder="Buscar um fornecedor, busque por nome, descrição, contato"
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
            maxWidth: '500px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px',
            },
          }}
        />
      </ContainerSearch>
      <ContainerSearch>
        <div>
          <Tooltip title="Exportar dados para CSV" arrow>
            <CustomButton
              size={'large'}
              color="success"
              variant="contained"
              startIcon={<CloudDownload />}
              onClick={handleExportCSV}
            >
              Exportar CSV
            </CustomButton>
          </Tooltip>
        </div>
        <div>
          <CustomButton onClick={onClickButton} variant="contained" style={{ width: '200px' }} size={'large'}>
            {buttonContent}
          </CustomButton>
        </div>
      </ContainerSearch>
    </HeadContainer>
  );
};

export default Head;
