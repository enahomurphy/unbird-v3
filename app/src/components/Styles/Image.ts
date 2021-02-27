import styled from 'styled-components';

export interface ImageProps {
  width: string;
  height: string;
  src: string;
  bgSize?: string;
  radius?: string;
}

export const Image = styled.div<ImageProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-size: ${({ bgSize }) => bgSize};
  border-radius: ${({ radius }) => radius};
`;

export default { Image };
