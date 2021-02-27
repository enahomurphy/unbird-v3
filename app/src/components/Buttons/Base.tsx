import styled from 'styled-components';
import { BaseButtonProps } from './interface/button';

export const BaseButton = styled.button<BaseButtonProps>`
  cursor: pointer;
  outline: none;
  padding: auto 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  font-size: 16px;
  ${(props) => {
    let styles = {};

    const keys = [
      'height',
      'width',
      'borderRadius',
      'color',
      'background',
      'fontSize',
      'textTransform',
      'padding',
    ];

    keys.forEach((key) => {
      if (!props[key]) return;
      if (key === 'color' || key === 'background') {
        styles[key] = props.theme.colors[props[key]] || props[key];
        return;
      }

      styles[key] = props[key];
    });

    if (props.disabled) {
      styles = {
        ...styles,
        opacity: '0.7',
        cursor: 'default',
      };
    }

    if (props.inverse) {
      const borderColor = props.theme.colors[props.color] || props.background;
      styles = {
        ...styles,
        color: props.color ? props.theme.colors[props.color] : borderColor,
        background: 'transparent',
        border: `1px solid ${borderColor}`,
      };
    }

    return styles;
  }}
  &:hover {
    ${({ hoverColor, hoverBackground, theme: { colors } }) => {
      const styles: Record<string, string> = {};
      if (hoverColor) styles.color = colors[hoverColor] || hoverColor;
      if (hoverBackground) {
        styles.background = colors[hoverBackground] || hoverBackground;
        styles.opacity = '1';
      } else {
        styles.opacity = '0.7';
      }

      return styles;
    }}

    svg {
      path {
        ${({ hoverColor, theme: { colors } }) => {
          const styles: Record<string, string> = {};
          if (hoverColor) styles.fill = colors[hoverColor] || hoverColor;

          return styles;
        }}
      }
    }
  }

  svg {
    margin: ${({ iconMargin }) => iconMargin};
  }
`;

BaseButton.defaultProps = {
  iconMargin: '0 10px 0 0',
};

export default BaseButton;
