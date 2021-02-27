import { FC, ReactElement } from 'react';
import withFeatureFlag from './withFeatureFlag';

const FeatureFlag: FC<{
  children: (t: boolean) => ReactElement;
  isFeatureEnabled: (feature: string) => boolean;
  feature: string;
}> = ({ children, feature, isFeatureEnabled }): ReactElement =>
  children(isFeatureEnabled(feature));

export default withFeatureFlag(FeatureFlag);
