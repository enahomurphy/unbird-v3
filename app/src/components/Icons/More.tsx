import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const More: FC<Props> = ({
  width = '14',
  height = '14',
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
        d="M6.84443 2.8C7.61667 2.8 8.24443 2.17224 8.24443 1.4C8.24443 0.62776 7.61667 0 6.84443 0C6.07219 0 5.44443 0.62776 5.44443 1.4C5.44443 2.17224 6.07219 2.8 6.84443 2.8ZM8.24443 7C8.24443 7.77224 7.61667 8.4 6.84443 8.4C6.07219 8.4 5.44443 7.77224 5.44443 7C5.44443 6.22776 6.07219 5.6 6.84443 5.6C7.61667 5.6 8.24443 6.22776 8.24443 7ZM8.24443 12.6C8.24443 13.3722 7.61667 14 6.84443 14C6.07219 14 5.44443 13.3722 5.44443 12.6C5.44443 11.8278 6.07219 11.2 6.84443 11.2C7.61667 11.2 8.24443 11.8278 8.24443 12.6Z"
        fill={fill}
      />
    </svg>
  );
};

export default More;
