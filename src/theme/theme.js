import { createTheme } from '@mui/material/styles';
import { colorSchemes, typography, shadows, shape } from './primitive';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
    },
    colorSchemes, // Light and dark color schemes
    typography,
    shadows,
    shape,
    defaultColorScheme: 'light', // Set the default to light
});

export default theme;