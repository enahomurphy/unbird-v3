import React, { FC, ReactElement } from 'react';
import { isImage } from 'lib/utils';
import { Image, Video, Div, P } from 'components/Styles';
import { Color } from 'lib/themes/interface';

export interface AvatarProps {
  src?: string;
  radius?: string;
  width?: string;
  fontSize?: string;
  initials: string;
  autoPlay?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  src,
  radius,
  width,
  fontSize,
  initials,
  autoPlay,
}): ReactElement => (
  <Div width="fit-content">
    {src ? (
      <Div width={width} height={width}>
        {isImage(src) ? (
          <Image src={src} width={width} height={width} radius={radius} />
        ) : (
          <Video
            width={width}
            height={width}
            borderRadius={radius}
            src={src}
            autoPlay={autoPlay}
            loop
            muted
          />
        )}
      </Div>
    ) : (
      <Div
        width={width}
        height={width}
        borderRadius={radius}
        backgroundColor={Color.yellow}
        textAlign="center"
        margin="auto 0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <P
          textTransform="capitalize"
          fontSize={fontSize}
          fontWeight="700"
          color={Color.licorice}
        >
          {initials}
        </P>
      </Div>
    )}
  </Div>
);

Avatar.defaultProps = {
  src: '',
  radius: '100%',
  width: '24px',
  fontSize: '16px',
  autoPlay: true,
};

export default Avatar;
