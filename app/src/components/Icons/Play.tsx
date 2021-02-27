import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Play: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0.000228091V18L15.7267 9.00068L1 0.000228091Z"
        fill={fill}
      />
    </svg>
  );
};

export default Play;
