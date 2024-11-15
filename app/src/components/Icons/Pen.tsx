import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Pen: FC<Props> = ({
  width = '18',
  height = '18',
  fill = '#F5F5F5',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M14.4501 0C14.3809 0.000700039 14.3125 0.015213 14.2489 0.0426878C14.1854 0.0701625 14.128 0.110046 14.0801 0.16L0.910072 13.33C0.838501 13.4047 0.789907 13.4984 0.770072 13.6L7.20425e-05 17.36C-0.0159678 17.4297 -0.0177342 17.5019 -0.00512058 17.5723C0.007493 17.6427 0.0342255 17.7099 0.0734669 17.7696C0.112708 17.8294 0.163647 17.8807 0.223214 17.9203C0.282781 17.9599 0.349745 17.987 0.420072 18C0.493064 18.01 0.56708 18.01 0.640072 18L4.40007 17.24C4.5031 17.2245 4.59808 17.1753 4.67007 17.1L17.8401 3.92C17.8894 3.87078 17.9285 3.81232 17.9551 3.74797C17.9818 3.68363 17.9955 3.61466 17.9955 3.545C17.9955 3.47534 17.9818 3.40637 17.9551 3.34203C17.9285 3.27768 17.8894 3.21922 17.8401 3.17L14.8401 0.17C14.7701 0.0815901 14.6708 0.0212565 14.5601 0L14.4501 0ZM14.4501 1.29L16.7001 3.54L4.00007 16.21L1.19007 16.78L1.77007 14L14.4601 1.29H14.4501Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={width} height={width} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Pen;
