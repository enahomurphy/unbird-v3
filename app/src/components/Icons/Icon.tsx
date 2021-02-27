import { Color } from 'lib/themes/interface';
import React, { FC, ComponentType, ReactElement } from 'react';
import { useTheme } from 'styled-components';

interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default (Icon: ComponentType<IconProps>): FC<IconProps> => {
  const Component: FC<IconProps> = ({
    width = '18',
    fill = Color.white,
    height = '18',
  }): ReactElement => {
    const { colors } = useTheme();
    const fillColor = colors[fill] ?? fill;
    return <Icon width={width} height={height} fill={fillColor} />;
  };

  return Component;
};
