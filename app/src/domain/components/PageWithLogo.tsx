import React, { ReactNode } from 'react';

import { Page } from 'components/Styles/Element';
import { Unbird } from 'components/Icons';

const PageWithLogo = ({ children }: { children: ReactNode }) => {
  return (
    <Page padding='21px 32px'>
      <Unbird />
      {children}
    </Page>
  );
};

export default PageWithLogo;
