import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Open: FC<Props> = ({
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
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.82 15.8201H2.18V2.1801H7.66V1.1001H1.1V16.9001H16.9V10.3501H15.82V15.8201Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 0H9.84V1.08H16.16L4.89 12.35L5.65 13.11L16.92 1.84V8.16H18V0Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={width} height={height} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Open;
