/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC, ReactElement, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'lib/themes';
import { ApolloProvider } from '@apollo/client';
import { OptimizelyProvider } from '@optimizely/react-sdk';
import { render } from '@testing-library/react';
import GlobalStyle from 'components/Styles/Global';
import client from 'lib/graphql/client';
import optimizely from 'lib/optimizely';
import fs from 'fs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = JSON.parse(
  fs.readFileSync('./dist/locales/en/translation.json').toString()
);

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: resources,
    },
  },
});

const AppProviders: FC = ({ children }): ReactElement => {
  return (
    <Suspense fallback={<div />}>
      <ApolloProvider client={client}>
        <OptimizelyProvider optimizely={optimizely}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>{children}</Router>
          </ThemeProvider>
        </OptimizelyProvider>
      </ApolloProvider>
    </Suspense>
  );
};

export default AppProviders;

const customRender = (ui, options?: any) =>
  render(ui, { wrapper: AppProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
