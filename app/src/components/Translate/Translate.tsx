import { FC, ReactElement } from 'react';
import { TFunction } from 'i18next';

import withFeatureFlag from './withTranslate';

const Translate: FC<{
  children: (t: TFunction) => ReactElement;
  t: TFunction;
}> = ({ children, t }): ReactElement => children(t);

export default withFeatureFlag(Translate);
