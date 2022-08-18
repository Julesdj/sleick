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
            light: '#ff784e',
            main: '#ff5722',
            dark: '#b23c17',
            contrastText: '#000',
        },
        background: {
            gradient:
                'linear-gradient(45deg,hsla(100, 41%, 52%, 1) 6%,hsla(255, 39%, 51%, 1) 37%,hsla(99, 70%, 71%, 1) 64%,hsla(255, 61%, 39%, 1) 86%)',
            default: '#F5F5F5',
        },
    },
});

export default theme;
