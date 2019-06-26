import React                     from 'react';
import ReactDOM                  from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App                       from './components/App';
import {ThemeProvider}           from './blocks/TopBar/components/theme-switcher';
import * as serviceWorker        from './serviceWorker';
import {ApolloProvider}          from 'react-apollo';
import {getApolloClient}         from './components/Apollo';

const WrappedApp=() => (
  <Router>
    <ThemeProvider>
      <ApolloProvider client={getApolloClient(`${process.env.REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`)}>
        <App/>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
);
ReactDOM.render(<WrappedApp/>,document.getElementById('react-content') as HTMLElement);
serviceWorker.unregister();
