import React, { ReactNode } from 'react';

import { Div, Page } from 'components/Styles/Element';
import { Unbird } from 'components/Icons';

const PageWithLogo = ({
  children,
  rightItem,
}: {
  children: ReactNode;
  rightItem?: ReactNode;
}) => {
  return (
    <Page padding="21px 32px">
      <Div display="flex" justifyContent="space-between">
        <Unbird />
        {rightItem}
      </Div>
      {children}
    </Page>
  );
};

export default PageWithLogo;
