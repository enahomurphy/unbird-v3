import RenderIf from 'components/RenderIf';
import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  isMute?: boolean;
}

const Volume: FC<Props> = ({
  width = '24',
  height = '24',
  fill = 'white',
  isMute,
}): ReactElement => {
  return (
    <>
      <RenderIf isTrue={isMute}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.58333 0.397676C3.47925 0.273455 3.35569 0.174917 3.2197 0.107689C3.08371 0.0404613 2.93796 0.00585938 2.79077 0.00585938C2.64358 0.00585938 2.49783 0.0404613 2.36184 0.107689C2.22585 0.174917 2.10229 0.273455 1.99821 0.397676C1.78801 0.648552 1.66992 0.988813 1.66992 1.3436C1.66992 1.6984 1.78801 2.03866 1.99821 2.28953L19.8587 23.6062C19.9625 23.7311 20.0859 23.8302 20.2219 23.8979C20.358 23.9655 20.5039 24.0003 20.6512 24.0003C20.7986 24.0003 20.9445 23.9655 21.0805 23.8979C21.2166 23.8302 21.34 23.7311 21.4438 23.6062C21.5484 23.4824 21.6315 23.335 21.6881 23.1727C21.7448 23.0103 21.774 22.8362 21.774 22.6603C21.774 22.4844 21.7448 22.3103 21.6881 22.1479C21.6315 21.9856 21.5484 21.8382 21.4438 21.7144L3.58333 0.397676ZM17.2019 14.7731L18.8094 16.6916C19.6545 15.304 20.1032 13.6287 20.0891 11.9133C20.075 10.1979 19.599 8.53335 18.7312 7.16573C18.6389 7.02926 18.5249 6.91584 18.3958 6.83194C18.2668 6.74804 18.1251 6.69531 17.9789 6.67675C17.8328 6.65819 17.685 6.67418 17.544 6.72379C17.403 6.7734 17.2716 6.85566 17.1573 6.96589C16.9264 7.18849 16.779 7.51147 16.7476 7.86376C16.732 8.0382 16.7454 8.21459 16.787 8.38285C16.8286 8.55111 16.8975 8.70795 16.9898 8.84442C17.5136 9.69622 17.8135 10.7146 17.8513 11.7703C17.889 12.8259 17.663 13.8711 17.2019 14.7731Z"
            fill={fill}
          />
          <path
            d="M21.7674 12.0018C21.744 14.18 21.0347 16.268 19.7805 17.8506L21.3656 19.7424C23.0354 17.6551 23.9772 14.8877 24 12.0018C23.9794 10.2594 23.6318 8.54466 22.9827 6.98374C22.3336 5.42283 21.3996 4.05544 20.2493 2.98218C20.1364 2.87021 20.0062 2.78586 19.866 2.73397C19.7258 2.68207 19.5784 2.66364 19.4323 2.67972C19.2861 2.69581 19.144 2.74609 19.0142 2.8277C18.8843 2.90932 18.7692 3.02066 18.6754 3.15538C18.5815 3.2901 18.5109 3.44555 18.4674 3.61287C18.4239 3.78018 18.4085 3.95608 18.4219 4.13052C18.4354 4.30495 18.4775 4.47452 18.5459 4.62952C18.6143 4.78453 18.7076 4.92194 18.8205 5.03391C19.7158 5.85976 20.445 6.91406 20.9549 8.11966C21.4648 9.32525 21.7424 10.6517 21.7674 12.0018ZM13.3953 20.1288L7.70233 15.4658C7.51439 15.315 7.29248 15.236 7.06605 15.2393H2.23256V8.76434H5.8493L3.61674 6.09975H1.11628C0.820224 6.09975 0.536293 6.24011 0.326951 6.48997C0.117608 6.73982 0 7.0787 0 7.43204V16.5716C0 16.9249 0.117608 17.2638 0.326951 17.5137C0.536293 17.7635 0.820224 17.9039 1.11628 17.9039H6.69767L13.853 23.766C14.0427 23.9124 14.2634 23.991 14.4893 23.9925C14.7854 23.9925 15.0693 23.8521 15.2786 23.6022C15.488 23.3524 15.6056 23.0135 15.6056 22.6602V20.4352L13.373 17.7706L13.3953 20.1288ZM13.3953 3.87482V10.2299L15.6279 12.8944V1.34346C15.6296 1.09928 15.5751 0.85923 15.4702 0.649542C15.3654 0.439854 15.2143 0.268592 15.0334 0.154464C14.8525 0.0403374 14.6488 -0.012264 14.4446 0.0024072C14.2404 0.0170784 14.0435 0.0984579 13.8753 0.237655L8.62884 4.54096L10.2363 6.45947L13.3953 3.87482Z"
            fill={fill}
          />
        </svg>
      </RenderIf>
      <RenderIf isTrue={!isMute}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.726 7.17226C18.5393 6.89665 18.2685 6.72076 17.973 6.68328C17.6776 6.6458 17.3818 6.74981 17.1506 6.97242C16.9195 7.19503 16.772 7.518 16.7405 7.8703C16.7091 8.22259 16.7963 8.57535 16.983 8.85096C17.5475 9.76613 17.852 10.8725 17.852 12.0085C17.852 13.1446 17.5475 14.2509 16.983 15.1661C16.8498 15.3618 16.7659 15.5987 16.7411 15.8491C16.7163 16.0994 16.7516 16.3531 16.8428 16.5805C16.9341 16.8079 17.0776 16.9998 17.2567 17.1338C17.4358 17.2679 17.6431 17.3386 17.8545 17.3377C18.0214 17.3384 18.1864 17.2945 18.3372 17.2091C18.488 17.1238 18.6209 16.9993 18.726 16.8448C19.6123 15.4539 20.0921 13.7553 20.0921 12.0085C20.0921 10.2618 19.6123 8.56307 18.726 7.17226Z"
            fill={fill}
          />
          <path
            d="M20.2458 2.98965C20.1328 2.87767 20.0025 2.79333 19.8621 2.74143C19.7218 2.68954 19.5743 2.6711 19.428 2.68719C19.2817 2.70327 19.1395 2.75355 19.0095 2.83517C18.8795 2.91678 18.7643 3.02813 18.6704 3.16284C18.5765 3.29756 18.5058 3.45302 18.4622 3.62033C18.4187 3.78765 18.4032 3.96355 18.4167 4.13799C18.4302 4.31242 18.4724 4.48199 18.5408 4.63699C18.6093 4.792 18.7027 4.92941 18.8156 5.04139C19.7118 5.86724 20.4417 6.92154 20.9521 8.12714C21.4625 9.33274 21.7403 10.6591 21.7654 12.0093C21.7403 13.3595 21.4625 14.6859 20.9521 15.8915C20.4417 17.0971 19.7118 18.1514 18.8156 18.9772C18.7025 19.0891 18.609 19.2264 18.5404 19.3815C18.4719 19.5365 18.4297 19.7061 18.4162 19.8806C18.4027 20.0551 18.4182 20.231 18.4618 20.3984C18.5054 20.5657 18.5763 20.7211 18.6704 20.8558C18.7754 21.0062 18.907 21.1271 19.0557 21.21C19.2044 21.2929 19.3666 21.3357 19.5307 21.3354C19.7918 21.336 20.0448 21.2276 20.2458 21.029C21.3971 19.9557 22.332 18.5883 22.9817 17.0274C23.6314 15.4665 23.9794 13.7517 24 12.0093C23.9794 10.2669 23.6314 8.55215 22.9817 6.99122C22.332 5.4303 21.3971 4.06291 20.2458 2.98965ZM15.0615 0.178494C14.8916 0.0615605 14.6989 0 14.5028 0C14.3067 0 14.114 0.0615605 13.9441 0.178494L6.70391 6.10722H1.11732C0.820987 6.10722 0.536793 6.24759 0.327255 6.49745C0.117717 6.7473 0 7.08618 0 7.43952V16.5791C0 16.9324 0.117717 17.2713 0.327255 17.5212C0.536793 17.771 0.820987 17.9114 1.11732 17.9114H6.70391L13.8659 23.7735C14.0557 23.9199 14.2767 23.9985 14.5028 24C14.7991 24 15.0833 23.8596 15.2929 23.6098C15.5024 23.3599 15.6201 23.021 15.6201 22.6677V1.35092C15.6229 1.1139 15.5726 0.880299 15.4744 0.674205C15.3762 0.468111 15.2336 0.29699 15.0615 0.178494ZM13.419 20.163L7.68715 15.4733C7.49904 15.3225 7.27692 15.2435 7.05028 15.2468H2.21229V8.77182H7.05028C7.27692 8.7751 7.49904 8.69611 7.68715 8.54533L13.3855 3.88229L13.419 20.163Z"
            fill={fill}
          />
        </svg>
      </RenderIf>
    </>
  );
};

export default Volume;
