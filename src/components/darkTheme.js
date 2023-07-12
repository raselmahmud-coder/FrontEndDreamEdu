import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Customize the color palette for the dark theme
    primary: {
      main: '#2196f3',
    },
    // Add any other customizations specific to the dark theme
  },
});

export default darkTheme;
