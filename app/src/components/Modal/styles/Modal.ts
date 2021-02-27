import styled from 'styled-components';

export const ModalOverlay = styled.div<{
  fullscreen: boolean;
}>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  border-radius: 10px;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, fullscreen }) =>
    fullscreen ? theme.colors.black : 'rgb(33 40 44 / 75%)'};
`;

export const ModalWrapper = styled.div<{
  width: string;
  height?: string;
  fullscreen: boolean;
}>`
  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.1), 0px 10px 28px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(139, 150, 158, 0.5);
  width: ${({ width, fullscreen }) => (fullscreen ? '100%' : width)};
  height: ${({ height, fullscreen }) =>
    fullscreen ? '100%' : height || 'initial'};
  border-radius: ${({ fullscreen }) => (fullscreen ? '0px' : '8px')};
  background-color: ${({ theme, fullscreen }) =>
    fullscreen ? 'inherit' : theme.colors.licorice};
  z-index: ${({ theme }) => theme.zIndex.modal};
  border-radius: inherit;
`;

export default { ModalWrapper };
