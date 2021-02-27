import { Color } from 'lib/themes/interface';
import React, { FC } from 'react';

import { LoaderContainer, LoaderInnerCircle } from './styles/style';

interface CircularLoaderProps {
  size?: string;
  color?: Color;
}

export const CircularLoader: FC<CircularLoaderProps> = ({ size, color }) => {
  return (
    <LoaderContainer size={size}>
      <LoaderInnerCircle size={size} color={color} />
    </LoaderContainer>
  );
};

CircularLoader.defaultProps = {
  size: '20px',
};

export default CircularLoader;
