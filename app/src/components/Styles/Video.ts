import styled from 'styled-components';

export interface VideoProps {
  flipped?: boolean;
  height?: string;
  width?: string;
  src: string;
  bgSize?: number;
  borderRadius?: string;
  background?: string;
}

export const Video = styled.video<VideoProps>`
  object-fit: cover;
  -webkit-transform: ${({ flipped = false }) =>
    flipped ? 'scaleX(1)' : 'scaleX(-1)'};
  transform: ${({ flipped }) => (flipped ? 'scaleX(1)' : 'scaleX(-1)')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  background-color: ${({ background }) => background};

  ${({ borderRadius }) => {
    if (borderRadius) {
      return { borderRadius };
    }

    return {};
  }}
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export interface VideoGradientProps {
  zIndex?: string;
}

export const VideoGradient = styled.div<VideoGradientProps>`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  height: 200px;
  bottom: 0;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex || 0};
  pointer-events: none;
`;

export default { Video };
