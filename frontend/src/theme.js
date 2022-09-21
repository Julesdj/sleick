import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#6a52b3',
            main: '#4527a0',
            dark: '#301b70',
            contrastText: '#fff',
        },
        secondary: {
            light: '#94c773',
            main: '#74b652',
            dark: '#56941e',
            contrastText: '#000',
        },
        background: {
            gradient:
                'linear-gradient(315deg, hsla(222, 80%, 41%, 1) 0%, hsla(154, 63%, 56%, 1) 100%)',
            default: '#F5F5F5',
        },
    },
});

export default theme;
