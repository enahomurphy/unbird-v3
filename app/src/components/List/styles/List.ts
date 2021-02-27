import { css } from 'styled-components';

export const listStyles = css`
  overflow: hidden;
  overflow-x: hidden;
  outline: none;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 1em;
    width: 4px;
  }

  &:hover {
    overflow-y: overlay;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.ash};
    outline: none;
    border-radius: 4px;
  }
`;

export default { listStyles };
