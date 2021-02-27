import styled, { keyframes } from 'styled-components';

const LoaderKeyframes = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const LoaderContainer = styled.div<{ size: string }>`
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  font-size: 0;
  position: relative;
`;

export const LoaderInnerCircle = styled.div<{ size: string; color: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  border: 3px solid
    ${({ color, theme }) => (color ? theme.colors[color] : '#757575')};
  border-top-color: transparent;
  box-sizing: border-box;
  animation: ${LoaderKeyframes} 1s linear infinite;
`;

export const RecordingInfo = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(--gb-red);
  z-index: 4000;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  -webkit-app-region: drag;
  height: 34px;
  z-index: 4;
`;
