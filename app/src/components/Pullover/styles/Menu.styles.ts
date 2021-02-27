import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MenuBaseProps {
  dark?: boolean;
}
export const MenuBase = styled(motion.ul)<MenuBaseProps>`
  transition: color 0.15s, background-color 0.15s, width 0.25s ease-in-out;
  position: absolute;
  list-style: none;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
  margin: 0;
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.black : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  z-index: ${({ theme }) => theme.zIndex.menuBase};
  border: 1px solid rgba(27, 31, 35, 0.15);
  padding: 6px 0;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.menuBase};
`;

interface ItemBaseProps {
  height?: string;
  hoverBackground?: string;
  hoverColor?: string;
  highlight?: boolean;
}

export const PopoverOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemBase = styled.li<ItemBaseProps>`
  list-style: none;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  height: ${({ height }) => height || '36px'};
  align-items: center;
  ${({ highlight, theme, hoverBackground, hoverColor }) =>
    highlight &&
    `
    background-color: ${hoverBackground || theme.colors.primary};

  p {
    color: ${hoverColor || theme.colors.white};
  }

  svg {
    fill: ${theme.colors.white};
  }
`}
`;

export default { MenuBase };
