import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const toggled = css`
  justify-content: flex-end;
`;

const disabled = css`
  justify-content: flex-start;
`;

export const ToggleWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.fresh : theme.colors.porcelain};
  cursor: pointer;
  user-select: none;
  border-radius: 20px;
  border: ${({ theme, selected }) =>
    !selected ? `1px solid ${theme.colors.tiara}` : 'none'};
  padding: 2px;
  height: 28px;
  width: 42px;
  position: relative;
  ${({ selected }) => (selected ? toggled : disabled)};
  display: flex;
  align-items: center;
`;

export const ToggleDialog = styled(motion.div)<{ selected: boolean }>`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
