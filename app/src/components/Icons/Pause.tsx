import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Pause: FC<Props> = ({
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
        d="M7.14286 18H2V0H7.14286V18ZM16.1429 18H11V0H16.1429V18Z"
        fill={fill}
      />
    </svg>
  );
};

export default Pause;
