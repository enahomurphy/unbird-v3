import { TFunction } from 'i18next';
import React, { ComponentType } from 'react';
import { withTranslation } from 'react-i18next';

const withTranslate = (
  Component: ComponentType<{ t?: TFunction }>
): ComponentType => {
  return withTranslation()((props) => (
    <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      t={props.t}
    />
  ));
};

export default withTranslate;
