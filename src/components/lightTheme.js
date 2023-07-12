import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Customize the color palette for the light theme
    primary: {
      main: '#ff5722',
    },
    // Add any other customizations specific to the light theme
  },
});

export default lightTheme;
