import React, { FC, ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { Color } from 'lib/themes/interface';
import * as Icons from 'components/Icons';
import { BaseButton } from './Base';
import { BaseButtonProps } from './interface/button';

export interface ButtonProps extends BaseButtonProps {
  iconSize?: number;
  iconColor?: Color;
  inverse?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({
  height,
  width,
  icon,
  color,
  background = Color.primary,
  children,
  borderRadius,
  iconSize = '14',
  inverse,
  fontSize,
  onClick,
  textTransform,
  padding,
  iconMargin,
  iconColor,
  hoverColor,
  hoverBackground,
  disabled,
}): ReactElement => {
  const theme = useTheme();
  const ButtonIcon = icon ? Icons[icon] : null;
  return (
    <BaseButton
      onClick={onClick}
      withIcon={Boolean(icon)}
      inverse={inverse}
      width={width}
      height={height}
      borderRadius={borderRadius}
      background={background}
      color={color}
      fontSize={fontSize}
      padding={padding}
      disabled={disabled}
      textTransform={textTransform}
      iconMargin={iconMargin}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}
    >
      {ButtonIcon && (
        <ButtonIcon
          width={`${iconSize}`}
          height={`${iconSize}`}
          fill={theme.colors[iconColor] || theme.colors[color]}
        />
      )}
      {children}
    </BaseButton>
  );
};

export default Button;
