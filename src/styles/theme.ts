import { createTheme, CSSInterpolation } from '@mui/material/styles';
import 'styled-components';

const colors = {
  primary: '#0082F5',
  secondary: '#003B75',
  secondaryLight: '#4AC0FF',
  background: '#F9F9F9',
  paper: '#FFFFFF',
  textPrimary: '#666666',
  textSecondary: '#000000',
  grey300: '#EFEFEF',
  grey500: '#666666',
  error: '#d32f2f',
  success: '#2e7d32',
  warning: '#ed6c02',
};

const spacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

const typography = {
  fontFamily: 'Roboto, sans-serif',
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.75rem',
  h4: '1.5rem',
  h5: '1.25rem',
  h6: '1rem',
  body1: '1rem',
  body2: '0.875rem',
  caption: '0.75rem',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const borders = {
  borderRadius: '4px',
  borderWidth: '1px',
};

const textStyles = {
  title: {
    fontFamily: typography.fontFamily,
    fontSize: typography.h5,
    fontWeight: typography.fontWeightBold,
    color: colors.textSecondary,
  } as CSSInterpolation,
  description: {
    fontFamily: typography.fontFamily,
    fontSize: typography.body1,
    fontWeight: typography.fontWeightRegular,
    color: colors.textPrimary,
  } as CSSInterpolation,
  caption: {
    fontFamily: typography.fontFamily,
    fontSize: typography.caption,
    fontWeight: typography.fontWeightRegular,
    color: colors.textPrimary,
  } as CSSInterpolation,
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
    },
    background: {
      default: colors.background,
      paper: colors.paper,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    grey: {
      300: colors.grey300,
      500: colors.grey500,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borders.borderRadius,
        },
        containedPrimary: {
          color: colors.paper,
        },
      },
    },
  },
});

const styledTheme = {
  colors,
  spacing,
  typography,
  borders,
  textStyles,
  fontFamily: typography.fontFamily,
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    typography: typeof typography;
    borders: typeof borders;
    textStyles: typeof textStyles;
    fontFamily: string;
  }
}

export { theme, styledTheme };
