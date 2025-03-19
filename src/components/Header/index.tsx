import { Widgets } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Text from '../Text/styles';

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
          <Widgets />
        </IconButton>
        <Text variant="title">Gestão de Fornecedores</Text>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
