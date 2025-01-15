import { createTheme, alpha } from '@mui/material/styles';

const defaultTheme = createTheme();

export const brand = {
    50: 'hsl(210, 100%, 95%)',
    100: 'hsl(210, 100%, 92%)',
    200: 'hsl(210, 100%, 80%)',
    300: 'hsl(210, 100%, 65%)',
    400: 'hsl(210, 98%, 48%)',
    500: 'hsl(210, 98%, 42%)',
    600: 'hsl(210, 98%, 55%)',
    700: 'hsl(210, 100%, 35%)',
    800: 'hsl(210, 100%, 16%)',
    900: 'hsl(210, 100%, 21%)',
};

export const gray = {
    50: 'hsl(220, 35%, 97%)',
    100: 'hsl(220, 30%, 94%)',
    200: 'hsl(220, 20%, 88%)',
    300: 'hsl(220, 20%, 80%)',
    400: 'hsl(220, 20%, 65%)',
    500: 'hsl(220, 20%, 42%)',
    600: 'hsl(220, 20%, 35%)',
    700: 'hsl(220, 20%, 25%)',
    800: 'hsl(220, 30%, 6%)',
    900: 'hsl(220, 35%, 3%)',
};

export const green = {
    50: 'hsl(120, 80%, 98%)',
    100: 'hsl(120, 75%, 94%)',
    200: 'hsl(120, 75%, 87%)',
    300: 'hsl(120, 61%, 77%)',
    400: 'hsl(120, 44%, 53%)',
    500: 'hsl(120, 59%, 30%)',
    600: 'hsl(120, 70%, 25%)',
    700: 'hsl(120, 75%, 16%)',
    800: 'hsl(120, 84%, 10%)',
    900: 'hsl(120, 87%, 6%)',
};

export const colorSchemes = {
    light: {
        palette: {
            primary: {
                contrastText: 'hsl(0, 0%, 100%)', // White text
                light: 'hsl(210, 90%, 75%)', // Light blue for hover states
                main: 'hsl(210, 85%, 50%)', // Branding blue
                dark: 'hsl(210, 80%, 35%)', // Dark blue for critical elements
            },
            secondary: {
                contrastText: 'hsl(210, 85%, 50%)', // Blue text
                light: 'hsl(0, 0%, 100%)', // White background for hover
                main: 'hsl(0, 0%, 100%)', // White background
                dark: 'hsl(210, 90%, 85%)', // Light blue for border on hover
            },
            background: {
                default: 'hsl(0, 0%, 96%)', // Very light gray for backgrounds
                paper: 'hsl(0, 0%, 100%)', // White for cards and containers
            },
            text: {
                primary: 'hsl(0, 0%, 10%)', // Deep black for main text
                secondary: 'hsl(0, 0%, 30%)', // Neutral gray for secondary text
            },
            action: {
                hover: 'hsl(210, 85%, 90%)', // Hover effect with subtle blue
                selected: 'hsl(210, 85%, 80%)', // Highlight for selected states
                disabledBackground: 'hsl(0, 0%, 90%)', // Disabled element background
            },
        },
    },
    dark: {
        palette: {
            primary: {
                contrastText: 'hsl(0, 0%, 10%)', // Black text for contrast
                light: 'hsl(210, 90%, 55%)', // Lighter blue for hover states
                main: 'hsl(210, 85%, 45%)', // Branding blue
                dark: 'hsl(210, 80%, 30%)', // Dark blue for critical elements
            },
            secondary: {
                contrastText: 'hsl(210, 85%, 50%)', // Blue text
                light: 'hsl(220, 25%, 18%)', // Dark gray for hover
                main: 'hsl(220, 25%, 15%)', // Dark gray background
                dark: 'hsl(220, 20%, 12%)', // Very dark gray border on hover
            },
            background: {
                default: 'hsl(220, 25%, 12%)', // Very dark gray for backgrounds
                paper: 'hsl(220, 20%, 18%)', // Slightly lighter gray for containers
            },
            text: {
                primary: 'hsl(0, 0%, 95%)', // White for main text
                secondary: 'hsl(0, 0%, 75%)', // Light gray for secondary text
            },
            action: {
                hover: 'hsl(210, 85%, 35%)', // Hover effect with brighter blue
                selected: 'hsl(210, 85%, 45%)', // Highlight for selected states
                disabledBackground: 'hsl(220, 20%, 25%)', // Disabled element background
            },
        },
    },
};

export const typography = {
    fontFamily: 'Inter, sans-serif',
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
    },
    h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
    },
    h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
    },
    subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
    },
    body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
    },
    body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
    },
    caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
    },
};

export const shape = {
    borderRadius: 8,
};

const defaultShadows = [
    'none',
    'var(--template-palette-baseShadow)',
    ...defaultTheme.shadows.slice(2),
];

export const shadows = defaultShadows;