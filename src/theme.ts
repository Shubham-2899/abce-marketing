import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#00acef',
          },
          secondary: {
            main: '#ffb300',
          },
          background: {
            default: '#f5f7fa',
            paper: '#fff',
          },
          text: {
            primary: '#222',
            secondary: '#555',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#00acef',
          },
          secondary: {
            main: '#ffb300',
          },
          background: {
            default: '#181c20',
            paper: '#23272f',
          },
          text: {
            primary: '#fff',
            secondary: '#bbb',
          },
        }),
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export const getTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode)); 