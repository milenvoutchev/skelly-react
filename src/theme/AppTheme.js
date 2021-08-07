import { createTheme } from '@material-ui/core/styles';

const AppTheme = createTheme({
    palette: {
        primary: {
            light: '#6BC0C5',
            main: '#1ebea5',
            dark: '#0A7C6A',
            contrastText: '#fff',
        },
        common: {
            portfolio: "#82ca9d",
            contributions: "#8884d8",
            returns: "#ffc658",
        },
    },
});

export default AppTheme;
