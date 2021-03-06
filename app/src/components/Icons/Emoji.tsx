import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Emoji: FC<Props> = ({
  width = '24',
  height = '24',
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
          d="M9 16.94C7.42962 16.94 5.8945 16.4743 4.58878 15.6019C3.28305 14.7294 2.26536 13.4894 1.6644 12.0385C1.06344 10.5877 0.906202 8.99119 1.21257 7.45098C1.51894 5.91077 2.27515 4.496 3.38558 3.38557C4.49601 2.27514 5.91078 1.51893 7.45099 1.21256C8.9912 0.906198 10.5877 1.06344 12.0385 1.6644C13.4894 2.26536 14.7294 3.28305 15.6019 4.58877C16.4743 5.8945 16.94 7.42962 16.94 9C16.9374 11.105 16.1 13.123 14.6115 14.6115C13.123 16.1 11.105 16.9374 9 16.94ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.387 0 9 0V0Z"
          fill={fill}
        />
        <path
          d="M9.10011 14.41C8.16491 14.3989 7.24896 14.1429 6.44359 13.6674C5.63821 13.1919 4.97156 12.5135 4.51011 11.7C4.47844 11.6423 4.45848 11.5789 4.45139 11.5134C4.4443 11.4479 4.45022 11.3817 4.4688 11.3185C4.48739 11.2553 4.51827 11.1964 4.55968 11.1452C4.6011 11.094 4.65222 11.0514 4.71011 11.02C4.82608 10.9579 4.96159 10.9429 5.08831 10.9783C5.21503 11.0137 5.32317 11.0968 5.39011 11.21C5.76614 11.8657 6.30543 12.4129 6.95554 12.7984C7.60565 13.1839 8.34445 13.3946 9.10011 13.41C9.85599 13.3956 10.5952 13.1853 11.2455 12.7996C11.8957 12.414 12.4348 11.8663 12.8101 11.21C12.8751 11.0933 12.9838 11.0072 13.1122 10.9707C13.2407 10.9341 13.3784 10.9501 13.4951 11.015C13.6118 11.08 13.6979 11.1887 13.7345 11.3171C13.7711 11.4456 13.7551 11.5833 13.6901 11.7C13.2295 12.5121 12.5644 13.1895 11.761 13.6649C10.9575 14.1403 10.0436 14.3972 9.11011 14.41H9.10011Z"
          fill={fill}
        />
        <path
          d="M5.88 7.72997C6.50408 7.72997 7.01 7.22405 7.01 6.59997C7.01 5.97589 6.50408 5.46997 5.88 5.46997C5.25592 5.46997 4.75 5.97589 4.75 6.59997C4.75 7.22405 5.25592 7.72997 5.88 7.72997Z"
          fill={fill}
        />
        <path
          d="M12.11 7.72997C12.7341 7.72997 13.24 7.22405 13.24 6.59997C13.24 5.97589 12.7341 5.46997 12.11 5.46997C11.4859 5.46997 10.98 5.97589 10.98 6.59997C10.98 7.22405 11.4859 7.72997 12.11 7.72997Z"
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

export default Emoji;