import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const ExitFullScreen: FC<Props> = ({
  width = '24',
  height = '24',
  fill = '#2D3B45',
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
        d="M14.4849 8.49507L22.9799 0L23.9993 1.01935L15.5042 9.51586H21.9202V10.9577H13.0431V2.08051H14.4849V8.49507ZM2.08051 14.4841V13.0423H10.9577V21.9195H9.51586V15.5035L1.02079 24L0 22.9792L8.49651 14.4841H2.08051Z"
        fill="white"
      />
    </svg>
  );
};

export default ExitFullScreen;
