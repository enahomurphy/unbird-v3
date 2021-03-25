import React, { FC, ReactElement, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { OptimizelyProvider } from '@optimizely/react-sdk';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import theme from 'lib/themes';
import GlobalStyle from 'components/Styles/Global';
import { AlertProvider } from 'components/Alert';
import client from 'lib/graphql/client';
import optimizely from 'lib/optimizely';
import { Div } from 'components/Styles';
import 'react-toastify/dist/ReactToastify.css';
import 'lib/i18n';
import UnbirdRouter from './router';

const App: FC = ({ children }): ReactElement => {
  return (
    <Suspense fallback={<div />}>
      <OptimizelyProvider optimizely={optimizely}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <AlertProvider>
              <GlobalStyle />
              <ToastContainer />
              <Router>
                <Div>{children}</Div>
              </Router>
            </AlertProvider>
          </ThemeProvider>
        </ApolloProvider>
      </OptimizelyProvider>
    </Suspense>
  );
};

export default UnbirdRouter(App);
