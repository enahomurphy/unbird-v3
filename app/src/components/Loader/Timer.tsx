import React, { FC, ReactElement } from 'react';

import RenderIf from 'components/RenderIf';
import { CountDownProvider, CountdownControls } from 'components/Providers';
import { P } from 'components/Styles';
import { Color } from 'lib/themes/interface';

const zeroPad = (num: number, places: number) => `${num}`.padStart(places, '0');

export interface TimerProps {
  duration: number;
  show: boolean;
  autoStart?: boolean;
  onEnd?: () => void;
  children: (
    element: () => ReactElement,
    controls: CountdownControls
  ) => ReactElement;
}

export { CountdownControls };

export const Timer: FC<TimerProps> = ({
  duration,
  show,
  autoStart,
  children,
  onEnd,
}): React.ReactElement => {
  return (
    <RenderIf isTrue={show}>
      <CountDownProvider
        onEnd={onEnd}
        autoStart={autoStart}
        duration={duration / 1000}
      >
        {(value: number, controls) => {
          const hours = Math.floor(value / 3600);
          const min = Math.floor((value / 60) % 60);
          const sec = Math.floor(value % 60);
          let timeColor = Color.white;

          if (value <= 50) {
            timeColor = Color.yellow;
          }

          if (value <= 20) {
            timeColor = Color.melon;
          }

          return children(
            () => (
              <P
                fontWeight="700"
                margin="0 0 0 8px"
                color={timeColor}
                fontSize="14px"
                lineHeight="20px"
              >
                {`${zeroPad(hours, 2)}:${zeroPad(min, 2)}:${zeroPad(sec, 2)}`}
              </P>
            ),
            controls
          );
        }}
      </CountDownProvider>
    </RenderIf>
  );
};

Timer.defaultProps = {
  duration: 60000,
};

export default Timer;
