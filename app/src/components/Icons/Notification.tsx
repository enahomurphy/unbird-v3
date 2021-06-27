import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Notification: FC<Props> = ({
  width = '18',
  height = '20',
  viewBoxWidth = '18',
  viewBoxHeight = '20',
  fill = '#778594',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.03612 0H8.96479C5.59565 0 2.50654 2.44456 2.20685 5.68096C2.18686 5.91248 2.17324 6.14906 2.16444 6.40391L2.15213 6.99974L2.14969 7.53395L2.16473 7.47306C2.02569 8.15105 1.70525 8.77993 1.23653 9.29378L1.16936 9.3802C0.768036 9.98985 0.537443 10.6955 0.50175 11.4242L0.500904 11.6624C0.480415 12.6208 0.808819 13.5691 1.42663 14.3223C2.26444 15.2069 3.34896 15.7346 4.51296 15.8466C7.49 16.1699 10.502 16.1699 13.4873 15.8457C14.6434 15.7393 15.7311 15.2101 16.5338 14.3582C17.1399 13.6331 17.4707 12.763 17.499 11.862L17.5 11.4587C17.4668 10.698 17.2348 9.99168 16.8286 9.38467L16.7669 9.30546L16.6162 9.12821C16.2776 8.70525 16.0303 8.21802 15.8896 7.69688L15.845 7.50977L15.8358 7.31353C15.833 7.22527 15.8317 7.1274 15.8312 7.00516L15.8311 6.33206C15.8288 6.07458 15.8212 5.89148 15.8034 5.68536C15.4934 2.44285 12.4034 0 9.03612 0ZM8.96479 1.39535H9.03612C11.7336 1.39535 14.1944 3.34075 14.4307 5.81326C14.4447 5.97558 14.4509 6.13044 14.4528 6.3605L14.4555 7.26514C14.4585 7.40982 14.4642 7.53013 14.4739 7.66551L14.4868 7.75818L14.5517 8.03396C14.744 8.7635 15.0893 9.44409 15.5647 10.0309L15.7026 10.1926L15.6873 10.1672C15.951 10.5613 16.1013 11.0186 16.1223 11.4901L16.1216 11.6536C16.1375 12.3097 15.9199 12.933 15.5084 13.4267C14.9645 14.002 14.1871 14.3802 13.3514 14.4572C10.4527 14.7719 7.53928 14.7719 4.65168 14.4583C3.80682 14.377 3.02881 13.9985 2.45369 13.3931C2.08086 12.9356 1.86568 12.3142 1.87919 11.6774L1.87935 11.4587L1.89682 11.2682C1.9389 10.9495 2.04539 10.6265 2.21045 10.3291L2.29415 10.1905C2.90779 9.50037 3.32892 8.66113 3.51441 7.75667L3.52879 7.61486L3.53532 6.69559L3.55137 6.2292C3.55866 6.08207 3.56798 5.94228 3.57967 5.80678C3.80804 3.34087 6.26651 1.39535 8.96479 1.39535ZM2.29415 10.1905C2.27931 10.2072 2.26436 10.2238 2.24929 10.2404L2.29856 10.1833L2.29415 10.1905ZM11.608 17.6906C11.3114 17.4491 10.8775 17.4967 10.6389 17.7969C10.5355 17.927 10.4158 18.0437 10.2826 18.1443C9.83075 18.4986 9.26691 18.6564 8.7064 18.5896C8.14669 18.523 7.63792 18.2381 7.29271 17.7995C7.05551 17.4981 6.62189 17.4484 6.32417 17.6885C6.02646 17.9286 5.9774 18.3676 6.21459 18.6689C6.787 19.3962 7.62578 19.8659 8.5453 19.9754C9.46401 20.0849 10.3891 19.826 11.1167 19.255C11.3327 19.0922 11.5366 18.8935 11.7129 18.6715C11.9515 18.3713 11.9045 17.9321 11.608 17.6906Z"
        fill={fill}
      />
    </svg>
  );
};

export default Notification;
