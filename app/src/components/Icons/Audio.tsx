import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Audio: FC<Props> = ({
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
        d="M1.58826 5.23537H4.54561L8.78098 1H10.5884V16.8826H8.78098L4.54561 12.6473H1.58826C0.712601 12.6473 0 11.9347 0 11.059V6.82363C0 5.94797 0.712601 5.23537 1.58826 5.23537ZM15.6748 3.32554L14.9262 4.07414C16.2264 5.3744 16.9412 7.10243 16.9412 8.94164C16.9412 10.7798 16.2264 12.5078 14.9262 13.8081L15.6748 14.5567C17.1741 13.0563 18 11.0625 18 8.94164C18 6.81972 17.1741 4.82592 15.6748 3.32554ZM12.6782 6.31645C13.3791 7.02693 13.7645 7.95871 13.7645 8.94132C13.7645 9.92392 13.3791 10.8557 12.6782 11.5662L13.4331 12.3095C14.3299 11.4 14.8234 10.2035 14.8234 8.94132C14.8234 7.67918 14.3299 6.48269 13.4331 5.57314L12.6782 6.31645ZM9.52957 2.05884V15.8238H9.21933L5.2942 11.8987V5.98397L9.21933 2.05884H9.52957ZM1.05884 11.059V6.82363C1.05884 6.53139 1.29708 6.29421 1.58826 6.29421H4.23537V11.5884H1.58826C1.29708 11.5884 1.05884 11.3512 1.05884 11.059Z"
        fill={fill}
      />
    </svg>
  );
};

export default Audio;