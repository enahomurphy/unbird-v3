import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Trouble: FC<Props> = ({
  width = '36',
  height = '36',
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
        d="M25.488 23.9908L23.9908 25.488L18 19.4972L12.0113 25.488L10.5141 23.9908L16.5028 18L10.5141 12.0113L12.0113 10.5141L18 16.5028L23.9908 10.5141L25.488 12.0113L19.4972 18L25.488 23.9908ZM18 0C8.07459 0 0 8.07459 0 18C0 27.9254 8.07459 36 18 36C27.9254 36 36 27.9254 36 18C36 8.07459 27.9254 0 18 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default Trouble;
