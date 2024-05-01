import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/globalStyle';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </>
    );
}
