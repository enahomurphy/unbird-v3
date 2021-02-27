import React, { ComponentType } from 'react';
import { withOptimizely, ReactSDKClient } from '@optimizely/react-sdk';

const isFeatureEnabled = (optimizely: ReactSDKClient) => (
  flag: string
): boolean => {
  return Boolean(optimizely && optimizely.isFeatureEnabled(flag));
};

const withFeatureFlag = (
  Component: ComponentType<{ isFeatureEnabled: (feature: string) => boolean }>
): ComponentType => {
  return withOptimizely((props) => (
    <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isFeatureEnabled={isFeatureEnabled(props.optimizely)}
    />
  ));
};

export default withFeatureFlag;
