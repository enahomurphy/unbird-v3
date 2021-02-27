import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Discussion: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
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
        d="M6.35313 3.17641V0H18V9.52924H15.8824V13.4542L11.9574 9.52924H11.6469V13.764H7.1014L3.17641 17.689V13.764H0V4.2348H11.6469V8.47044H12.3957L14.8236 10.8972V8.47044H16.9412V1.0588H7.41193V3.17641H6.35313ZM10.588 5.2936H1.0588V12.7052H4.23522V15.1331L6.66306 12.7052H10.588V5.2936ZM3.17643 8.47012H8.47046V7.41026H3.17643V8.47012ZM3.17643 10.5877H6.3539V9.52893H3.17643V10.5877Z"
        fill={fill}
      />
    </svg>
  );
};

export default Discussion;
