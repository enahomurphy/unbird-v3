import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const UnionFilled: FC<Props> = ({
  width = '18',
  height = '18',
  fill = '#C7CDD1',
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
        d="M6.35313 3.17641V0H18V9.52924H15.8824V13.4574L12.7049 10.2799V3.17641H6.35313ZM0 13.764V4.23479H11.6469V13.764H7.1014L3.17641 17.689V13.764H0ZM8.47046 8.47107H3.17643V7.41121H8.47046V8.47107ZM6.3539 10.5876H3.17643V9.52882H6.3539V10.5876Z"
        fill={fill}
      />
    </svg>
  );
};

export default UnionFilled;
