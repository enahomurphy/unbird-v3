import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Unbird: FC<Props> = ({
  width = '104',
  height = '21',
  viewBoxWidth = '104',
  viewBoxHeight = '21'
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.4318 20.6983H44.6472V18.7961H44.595C44.3039 19.4072 43.8684 19.9365 43.327 20.3373C42.6453 20.8089 41.8287 21.0399 41.0038 20.9944C40.3153 21.0154 39.6305 20.8838 38.9976 20.609C38.4861 20.3766 38.0365 20.025 37.6855 19.5829C37.339 19.142 37.0888 18.6319 36.9512 18.0863C36.8022 17.5159 36.7281 16.9282 36.7305 16.3382V8.84698H39.6637V14.8456C39.6637 15.1742 39.6637 15.5392 39.7118 15.9448C39.7402 16.3343 39.8268 16.7171 39.9686 17.0804C40.1022 17.4237 40.3204 17.7267 40.6026 17.9606C40.95 18.2186 41.3761 18.3449 41.8063 18.3175C42.2316 18.3317 42.6544 18.247 43.0422 18.0701C43.3654 17.915 43.6495 17.6875 43.8727 17.4049C44.0947 17.1211 44.256 16.7938 44.3462 16.4437C44.4466 16.0737 44.4966 15.6916 44.4947 15.308V8.84698H47.4278L47.4318 20.6983Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.04 8.84678H52.8247V10.7449H52.8769C53.1695 10.1336 53.6063 9.60436 54.1488 9.2037C54.8292 8.73242 55.6445 8.50144 56.468 8.54665C57.1585 8.52727 57.8443 8.66592 58.4743 8.95223C58.9906 9.19158 59.4461 9.54667 59.8064 9.99054C60.1447 10.4278 60.3881 10.9322 60.5206 11.4709C60.6682 12.043 60.7424 12.6319 60.7413 13.2231V20.6981H57.8082V14.7156C57.8082 14.3871 57.8082 14.0221 57.7601 13.6165C57.7293 13.2274 57.6428 12.8448 57.5033 12.4809C57.3693 12.1323 57.1464 11.8258 56.8572 11.5926C56.5091 11.3362 56.0836 11.21 55.6535 11.2357C55.2296 11.2218 54.8082 11.3065 54.4217 11.4831C54.0984 11.6382 53.8144 11.8657 53.5911 12.1483C53.3724 12.4281 53.2114 12.7495 53.1176 13.0933C53.02 13.4637 52.9714 13.8456 52.9732 14.2289V20.7184H50.04L50.04 8.84678Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.9492 2.0293H63.0161L63.0402 20.6864H65.8248V18.9058H65.877C66.2667 19.6028 66.8652 20.1566 67.5863 20.4876C68.315 20.8198 69.1062 20.9887 69.9055 20.9824C70.7326 20.993 71.5526 20.8286 72.313 20.4998C73.0075 20.193 73.6308 19.7426 74.1427 19.1776C74.6422 18.6024 75.0204 17.9303 75.2542 17.2024C75.5225 16.4198 75.6581 15.5971 75.6554 14.7688C75.6654 13.94 75.5296 13.116 75.2542 12.3353C74.996 11.6081 74.6024 10.9376 74.0946 10.3601C73.5944 9.79776 72.9835 9.34738 72.301 9.03787C71.5796 8.70986 70.7969 8.54249 70.0059 8.5471C69.5109 8.54101 69.0173 8.59964 68.5373 8.72151C68.1461 8.82316 67.7688 8.97299 67.4138 9.16765C67.1157 9.3279 66.837 9.52253 66.5832 9.74765C66.376 9.92916 66.1878 10.1317 66.0215 10.352H65.9492V2.0293ZM72.5097 13.4388C72.6624 13.8667 72.7398 14.3183 72.7384 14.7731C72.7395 15.2267 72.6621 15.6769 72.5097 16.1035C72.1996 16.9611 71.5601 17.6558 70.7362 18.03C69.8156 18.4249 68.7758 18.4249 67.8552 18.03C67.0313 17.6558 66.3918 16.9611 66.0817 16.1035C65.7767 15.242 65.7767 14.3002 66.0817 13.4388C66.2332 13.0177 66.4665 12.6316 66.7679 12.3031C67.0751 11.9695 67.4447 11.7007 67.8552 11.5122C68.7758 11.1173 69.8156 11.1173 70.7362 11.5122C71.1468 11.7007 71.5163 11.9695 71.8236 12.3031C72.1249 12.6316 72.3582 13.0177 72.5097 13.4388Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.702 3.5745C77.3641 3.89833 77.1739 4.34903 77.1763 4.81965C77.1724 5.29411 77.3627 5.74911 77.702 6.07698C78.0552 6.43064 78.5372 6.62139 79.0341 6.60424C79.5344 6.61649 80.0201 6.43347 80.3903 6.0932C80.7495 5.77078 80.9505 5.30514 80.94 4.81965C80.9504 4.33536 80.7494 3.871 80.3903 3.55016C80.0192 3.21173 79.5337 3.03025 79.0341 3.04318C78.5367 3.02759 78.0548 3.21976 77.702 3.5745ZM80.5067 8.84689H77.5776V20.6982H80.5067V8.84689Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.2354 8.84722H86.1805V10.721H86.2327C86.5307 10.0602 87.0151 9.50288 87.625 9.11897C88.2481 8.73149 88.9681 8.533 89.6995 8.54709C89.8759 8.54817 90.0519 8.56582 90.2251 8.59981C90.3976 8.63226 90.5702 8.67282 90.7507 8.72149V11.5849C90.5073 11.5201 90.2666 11.4673 90.0285 11.4268C89.7993 11.3854 89.5671 11.3637 89.3343 11.3619C88.7601 11.335 88.1895 11.4683 87.6852 11.7472C87.3081 11.9661 86.9823 12.265 86.7302 12.6233C86.5247 12.9227 86.3764 13.2583 86.2929 13.6129C86.2319 13.8547 86.1942 14.1019 86.1805 14.3511V20.6985H83.2514L83.2354 8.84722Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.175 18.918H101.223L101.215 20.6864H104V2.0293H101.071V10.352H100.994C100.829 10.1308 100.641 9.92814 100.433 9.74765C100.179 9.52161 99.9006 9.3269 99.6019 9.16765C99.2473 8.97231 98.8698 8.82244 98.4785 8.72151C97.9998 8.59962 97.5075 8.541 97.0139 8.5471C96.2255 8.54289 95.4455 8.71027 94.7268 9.03787C94.0338 9.34331 93.4129 9.79399 92.9051 10.3601C92.3973 10.9376 92.0037 11.6081 91.7455 12.3353C91.4701 13.116 91.3343 13.94 91.3443 14.7688C91.3416 15.5971 91.4772 16.4198 91.7455 17.2024C91.9901 17.9333 92.3807 18.6056 92.8931 19.1776C93.4016 19.7459 94.0221 20.2004 94.7147 20.512C95.4822 20.8455 96.3111 21.0101 97.1463 20.9946C97.9456 20.9999 98.7366 20.8312 99.4655 20.4998C100.185 20.1665 100.783 19.6132 101.175 18.918ZM94.5181 16.1028C94.3625 15.677 94.2837 15.2265 94.2854 14.7725C94.2857 14.324 94.3645 13.8792 94.5181 13.4584C94.6681 13.0367 94.9015 12.6502 95.2042 12.3228C95.5108 11.9901 95.8788 11.7214 96.2876 11.5319C97.2096 11.1372 98.2505 11.1372 99.1726 11.5319C99.5825 11.7214 99.9519 11.99 100.26 12.3228C100.56 12.6515 100.792 13.0376 100.942 13.4584C101.252 14.3189 101.252 15.2626 100.942 16.1231C100.635 16.9814 99.9966 17.6768 99.1726 18.0497C98.2505 18.4443 97.2096 18.4443 96.2876 18.0497C95.8754 17.857 95.5067 17.5809 95.2042 17.2385C94.9015 16.911 94.6681 16.5246 94.5181 16.1028Z"
        fill="#213245"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8581 12.4174C18.8574 14.1185 17.8207 15.6437 16.25 16.2543C16.0418 16.3579 15.8258 16.4447 15.604 16.5139L7.3423 19.134L3.83138 20.2737C3.72297 20.3192 3.59783 20.2806 3.53316 20.1815C3.46849 20.0825 3.4825 19.951 3.56655 19.8681L4.34899 18.8866L4.50146 18.696L5.44038 17.5076L14.316 14.6685L13.9147 14.2629L6.03824 16.7856L6.68425 15.9745C6.72438 15.9217 6.7645 15.8731 6.80061 15.8203L6.84074 15.7798L6.88488 15.727L7.94818 14.3643L12.5184 12.9123L12.0971 12.5067L8.56611 13.6302L9.01952 13.0623C9.99054 11.8456 11.0258 10.5396 11.6477 9.81762L11.7841 9.65944C11.8251 9.61052 11.8694 9.56444 11.9165 9.52154C11.9607 9.47287 12.0088 9.42826 12.057 9.38364C13.2465 8.28889 14.9628 8.00624 16.4345 8.66275C17.9063 9.31925 18.8565 10.7914 18.8581 12.4174Z"
        fill="#05C1E0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6413 15.1878L26.7425 15.9706C26.5861 16.1166 26.4256 16.2626 26.2731 16.4167C26.0831 16.5989 25.9363 16.8221 25.8437 17.0697C24.953 19.7588 22.2325 20.9066 19.7688 19.6736C18.7037 19.075 17.7526 18.2894 16.9601 17.3537L16.936 17.3253L16.8357 17.2198L16.4345 16.8345L16.5428 16.7899C18.1887 16.1258 19.321 14.5772 19.4661 12.7919C19.6113 11.0065 18.7442 9.29194 17.2276 8.36514C15.7111 7.43835 13.8062 7.45903 12.3096 8.41854L12.2374 8.46721L12.1572 8.52399L12.0528 8.60105L11.9726 8.65783L11.9164 8.70651C11.784 8.80649 11.6581 8.91487 11.5392 9.03098L11.4911 9.07559C11.0417 9.54202 10.4238 10.3167 10.2071 10.5965C8.10857 8.51182 5.95387 6.36626 3.82324 4.22475L3.61058 4.00168L0.0876236 0.513618C0.0170729 0.441953 -0.0136421 0.339538 0.00566397 0.240337C0.0249701 0.141136 0.0917741 0.0581137 0.183923 0.0188005C0.268721 -0.013054 0.363259 -0.00409515 0.440722 0.0431358L8.9191 4.94264C9.4814 5.3393 10.2164 5.38319 10.821 5.05621C12.2276 4.26462 13.8437 3.93706 15.4434 4.1193C19.5201 4.54111 21.0408 7.29506 21.0408 7.29506C21.366 7.73824 21.6356 8.22052 21.8433 8.73084C22.0646 9.19739 22.2432 9.68342 22.377 10.1828C22.5455 10.7993 22.6177 11.4361 22.7782 12.0567C23.2356 13.9143 24.3471 14.8106 26.1968 14.8106C26.4456 14.8106 26.6944 14.8106 26.9432 14.7782L27.4688 14.7295C27.572 14.7381 27.6612 14.8058 27.698 14.9037C27.7348 15.0015 27.7128 15.112 27.6413 15.1878Z"
        fill="#05C1E0"
      />
    </svg>
  );
  
};

export default Unbird;
