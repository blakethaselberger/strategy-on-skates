import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import theme from './theme/theme'; // Adjust the import path according to your theme file location

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);