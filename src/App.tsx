import AppRoutes from './routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/services/queryClient';
import { ThemeProvider } from '@mui/material/styles';
import { theme, styledTheme } from './styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ToastProvider from './context/ToastProvider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          <ToastProvider />
          <AppRoutes />
        </StyledThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
