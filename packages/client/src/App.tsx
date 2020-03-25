import React from 'react';
import { Dashboard } from './containers/dashboard';
import Themes from './contexts/Themes';
import { ThemeProvider } from 'styled-components';

function App() {
    const [theme, setTheme] = React.useState(Themes.default);
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    );
}

export default App;
