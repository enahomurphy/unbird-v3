import React, { ReactElement, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AnimationProvider from './AnimateProvider';

export interface CountDownProviderProps {
  pathColor: string;
  duration: number;
  onProgress: (counter: number) => void;
  paused: boolean;
}

const CircularProgress = ({
  pathColor,
  duration,
  onProgress,
  paused,
}: CountDownProviderProps): ReactElement => {
  const expendedRef = useRef(100);
  const currentRef = useRef(100);

  if (paused) {
    expendedRef.current = currentRef.current;

    return (
      <CircularProgressbar
        value={currentRef.current}
        counterClockwise
        styles={buildStyles({
          pathColor,
          backgroundColor: 'transparent',
          pathTransition: 'none',
          trailColor: 'transparent',
        })}
      />
    );
  }

  return (
    <AnimationProvider
      show
      duration={duration * (expendedRef.current / 100)}
      easingFunction="linear"
    >
      {(value) => {
        currentRef.current = expendedRef.current - value;
        onProgress(currentRef.current);
        return (
          <CircularProgressbar
            value={currentRef.current}
            counterClockwise
            styles={buildStyles({
              pathColor,
              backgroundColor: 'transparent',
              pathTransition: 'none',
              trailColor: 'transparent',
            })}
          />
        );
      }}
    </AnimationProvider>
  );
};

CircularProgress.defaultProps = {
  pathColor: '#0A84FF',
  onProgress: () => {},
  paused: false,
};

export default CircularProgress;
