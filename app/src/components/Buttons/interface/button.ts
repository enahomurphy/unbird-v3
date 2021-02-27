export interface BaseButtonProps {
  height?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  withIcon?: boolean;
  icon?: string;
  iconMargin?: string;
  padding?: string;
  inverse?: boolean;
  disabled?: boolean;
  hoverColor?: string;
  hoverBackground?: string;
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana';
}
