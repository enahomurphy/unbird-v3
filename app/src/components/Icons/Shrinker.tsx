import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Shrinker: FC<Props> = ({
  width = '18',
  height = '12',
  viewBoxWidth = '18',
  viewBoxHeight = '12',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 1L1 1M17 6.25806H1M17 11.5H1"
        stroke={fill}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Shrinker;
