import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Metrics: FC<Props> = ({
  width = '18',
  height = '18',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L7.12766 9.51064L9.51064 11.5532L17 1M17 1H10.5319M17 1V7.46808"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Metrics;
