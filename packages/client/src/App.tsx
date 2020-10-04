import React from 'react';
import { Dashboard } from './containers/dashboard';
import Themes from './contexts/Themes';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
const client = new ApolloClient({
    uri:
        process.env.NODE_ENV === 'development'
            ? `http://localhost:${process.env.PORT || 3000}/graphql`
            : '/graphql',
});
function App() {
    const [theme] = React.useState(Themes.default);
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Dashboard />
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
