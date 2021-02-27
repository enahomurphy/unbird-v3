import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const FullScreen: FC<Props> = ({
  width = '18',
  height = '18',
  fill = '#2D3B45',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.1 1.1H6V0H0V6H1.1V1.1Z" fill={fill} />
      <path d="M1.1 12H0V18H6V16.9H1.1V12Z" fill={fill} />
      <path d="M16.9 16.9H12V18H18V12H16.9V16.9Z" fill={fill} />
      <path d="M12 0V1.1H16.9V6H18V0H12Z" fill={fill} />
    </svg>
  );
};

export default FullScreen;
