import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'lib/themes';
import GlobalStyles from 'components/Styles/Global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
