import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const AudioWave: FC<Props> = ({
  width = '44',
  height = '17',
  fill = '#FFFFFF',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="43"
        y1="4"
        x2="43"
        y2="13"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="1"
        x2="36"
        y2="16"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="29"
        y1="3"
        x2="29"
        y2="15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="7"
        x2="22"
        y2="12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="3"
        x2="15"
        y2="15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="6"
        x2="8"
        y2="12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="3"
        x2="1"
        y2="15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AudioWave;
