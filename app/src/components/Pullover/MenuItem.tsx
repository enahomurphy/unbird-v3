import React, { FC } from 'react';
import { LayerSide } from 'react-laag';
import { CSSProperties } from 'styled-components';
import { ItemBase } from './styles';

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  arrowStyle?: CSSProperties;
  layerSide?: LayerSide;
  itemHeight?: string;
  hoverBackground?: string;
  hoverColor?: string;
  isSelected: boolean;
  onMouseOver?: () => void;
  onClick?: React.MouseEventHandler;
}

export const MenuItem: FC<MenuProps> = ({
  className,
  style,
  itemHeight,
  hoverBackground,
  hoverColor,
  isSelected,
  onMouseOver = () => {},
  children,
  onClick,
}) => {
  return (
    <ItemBase
      height={itemHeight}
      onClick={onClick}
      className={className}
      hoverBackground={hoverBackground}
      onMouseOver={onMouseOver}
      highlight={isSelected}
      hoverColor={hoverColor}
      style={style}
    >
      {children}
    </ItemBase>
  );
};

export default MenuItem;
