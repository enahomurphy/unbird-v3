import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Clock: FC<Props> = ({
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
        d="M9 1.05882C4.6207 1.05882 1.05882 4.6207 1.05882 9C1.05882 13.3793 4.6207 16.9412 9 16.9412C13.3793 16.9412 16.9412 13.3793 16.9412 9C16.9412 4.6207 13.3793 1.05882 9 1.05882ZM9 18C4.03729 18 0 13.9627 0 9C0 4.03729 4.03729 0 9 0C13.9627 0 18 4.03729 18 9C18 13.9627 13.9627 18 9 18ZM12.9178 12.6004L8.47078 9.26512V3.7063H9.5296V8.73571L13.5531 11.7523L12.9178 12.6004Z"
        fill={fill}
      />
    </svg>
  );
};

export default Clock;
