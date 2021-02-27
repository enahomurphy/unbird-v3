import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Share: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.9412C4.6207 16.9412 1.05882 13.3793 1.05882 9C1.05882 4.62071 4.6207 1.05883 9 1.05883C13.3793 1.05883 16.9412 4.62071 16.9412 9C16.9412 13.3793 13.3793 16.9412 9 16.9412ZM9 0C4.03729 0 0 4.03729 0 9C0 13.9627 4.03729 18 9 18C13.9627 18 18 13.9627 18 9C18 4.03729 13.9627 0 9 0ZM7.41176 6.35295H10.8985L5.4487 11.8017L6.19835 12.5513L11.6471 7.10153V10.5882H12.7059V5.29412H7.41176V6.35295Z"
        fill={fill}
      />
    </svg>
  );
};

export default Share;
