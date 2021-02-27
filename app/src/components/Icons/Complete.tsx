import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Complete: FC<Props> = ({
  width = '18',
  height = '18',
  fill = '2D3B45',
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
        d="M9 16.9412C4.6207 16.9412 1.05882 13.3793 1.05882 9C1.05882 4.62071 4.6207 1.05882 9 1.05882C13.3793 1.05882 16.9412 4.62071 16.9412 9C16.9412 13.3793 13.3793 16.9412 9 16.9412ZM9 0C4.03729 0 0 4.03729 0 9C0 13.9627 4.03729 18 9 18C13.9627 18 18 13.9627 18 9C18 4.03729 13.9627 0 9 0ZM8.00947 10.856L5.46618 8.31272L4.71759 9.06131L8.00947 12.3532L13.635 6.72766L12.8864 5.97907L8.00947 10.856Z"
        fill={fill}
      />{' '}
    </svg>
  );
};

export default Complete;
