import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Trash: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
}): ReactElement => {
  let d =
    'M14.8234 16.4118C14.8234 16.7029 14.5852 16.9412 14.294 16.9412H3.70577C3.41459 16.9412 3.17636 16.7029 3.17636 16.4118V5.29412H2.11753V16.4118C2.11753 17.2874 2.83012 18 3.70577 18H14.294C15.1697 18 15.8822 17.2874 15.8822 16.4118V5.29412H14.8234V16.4118ZM6.35284 14.8235H7.41166V6.35294H6.35284V14.8235ZM10.5881 14.8235H11.6469V6.35294H10.5881V14.8235ZM12.5682 3.17647L11.4099 0H6.51176L5.35553 3.17647H0V4.23529H18V3.17647H12.5682ZM6.48105 3.17647L7.25293 1.05882H10.6698L11.4416 3.17647H6.48105Z';
  if (width === '14') {
    d =
      'M11.5293 12.7647C11.5293 12.9912 11.344 13.1765 11.1176 13.1765L2.88226 13.1765C2.65579 13.1765 2.4705 12.9912 2.4705 12.7647L2.4705 4.11765H1.64697L1.64697 12.7647C1.64697 13.4458 2.20121 14 2.88226 14L11.1176 14C11.7986 14 12.3529 13.4458 12.3529 12.7647L12.3529 4.11765H11.5293L11.5293 12.7647ZM4.9411 11.5294L5.76463 11.5294L5.76463 4.94118H4.9411L4.9411 11.5294ZM8.23521 11.5294H9.05874L9.05874 4.94118L8.23521 4.94118L8.23521 11.5294ZM9.77529 2.47059L8.87435 0L5.06471 0L4.16541 2.47059L0 2.47059L0 3.29412L14 3.29412V2.47059L9.77529 2.47059ZM5.04081 2.47059L5.64117 0.82353L8.2987 0.82353L8.89905 2.47059L5.04081 2.47059Z';
  }

  if (width === '24') {
    d =
      'M19.7646 21.8824C19.7646 22.2706 19.4469 22.5882 19.0587 22.5882H4.94102C4.55279 22.5882 4.23514 22.2706 4.23514 21.8824V7.05883H2.82338V21.8824C2.82338 23.0499 3.77349 24 4.94102 24H19.0587C20.2262 24 21.1763 23.0499 21.1763 21.8824V7.05883H19.7646V21.8824ZM8.47045 19.7647H9.88222V8.47059H8.47045V19.7647ZM14.1175 19.7647H15.5293V8.47059H14.1175V19.7647ZM16.7576 4.23529L15.2132 0H8.68235L7.14071 4.23529H0V5.64706H24V4.23529H16.7576ZM8.6414 4.23529L9.67057 1.41177H14.2263L15.2555 4.23529H8.6414Z';
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill} />
    </svg>
  );
};

export default Trash;
