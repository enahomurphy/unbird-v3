import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Recording: FC<Props> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2V15.5H14.0675V11.3854L18 14.5068V2.99424L14.0675 6.11459V2H0ZM1.02919 3.02917H13.0384V6.11459V8.24494L14.7071 6.92035L16.9708 5.12353V8.75V12.3765L14.7071 10.5807L13.0384 9.25612V11.3854V14.4708H1.02919V3.02917Z"
        fill={fill}
      />
    </svg>
  );
};

export default Recording;
