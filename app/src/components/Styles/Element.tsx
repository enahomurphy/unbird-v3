import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'lib/themes/interface';

export interface StyledTextProps {
  color?: Color;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textAlign?: string;
  border?: string;
  boxShadow?: string;
  padding?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  borderBottom?: string;
  borderTop?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana';
  cursor?:
    | 'auto'
    | 'default'
    | 'none'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'cell'
    | 'crosshair'
    | 'text'
    | 'copy'
    | 'move';
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  userSelect?: string;
  overflow?: string;
  overflowY?: string;
  zIndex?: number;
  opacity?: number;
  background?: string;
  flexWrap?: 'inherit' | 'initial' | 'no-wrap' | 'wrap' | 'revert' | 'unset' | 'wrap-reverse'; 
}

export interface ElementProps extends StyledTextProps {
  children?: React.ReactNode;
}

const base = css`
  ${(props) => {
    const styles = {};

    const keys = [
      'color',
      'fontSize',
      'fontWeight',
      'lineHeight',
      'height',
      'width',
      'maxWidth',
      'maxHeight',
      'borderRadius',
      'backgroundColor',
      'textAlign',
      'border',
      'padding',
      'margin',
      'display',
      'justifyContent',
      'alignItems',
      'margin',
      'flexDirection',
      'textTransform',
      'boxShadow',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'paddingBottom',
      'position',
      'top',
      'bottom',
      'left',
      'right',
      'cursor',
      'borderBottom',
      'borderTop',
      'userSelect',
      'overflow',
      'overflowY',
      'zIndex',
      'background',
      'opacity',
      'minWidth',
      'flexWrap',
    ];

    keys.forEach((key) => {
      if (!props[key]) return;
      if (key === 'color' || key === 'backgroundColor') {
        styles[key] = props.theme.colors[props[key]] || props[key];
        return;
      }

      if (key === 'userSelect') {
        styles['-webkit-user-select'] = props[key];
        styles['user-select'] = props[key];
        return;
      }

      styles[key] = props[key];
    });

    return styles;
  }};
`;

export const Div = styled.div<StyledTextProps>`
  ${() => base}
`;

export const P = styled('p')<StyledTextProps>`
  ${() => base}
`;

export const Li = styled('li')<StyledTextProps>`
  ${() => base}
`;

export const Label = styled('label')<StyledTextProps>`
  ${() => base}
`;

export const Page = styled('div')<StyledTextProps>`
  ${() => base}
  width: 100%;
  height: 100%;
`;

export const Span = styled('span')<StyledTextProps>`
  ${() => base}
`;

export const H1 = styled('h1')<StyledTextProps>`
  ${() => base}
`;

export const H3 = styled('h1')<StyledTextProps>`
  ${() => base}
  font-size: 24px;
`;

export default { Div };

export const Space = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height};
`;

export const Aside = styled.aside<StyledTextProps>`
  ${() => base}
`;

export const Main = styled.main<StyledTextProps>`
  ${() => base}
`;

Space.defaultProps = {
  height: '16px',
};
