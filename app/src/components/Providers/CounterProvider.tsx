import {
  useState,
  useEffect,
  FC,
  ReactElement,
  useRef,
  useCallback,
} from 'react';

export interface CountdownControls {
  pause: () => void;
  restart: () => void;
  stop: () => void;
  resume: () => void;
  start: () => void;
}
export interface CountDownProviderProps {
  duration: number;
  children: (counter: number, controls: CountdownControls) => ReactElement;
  autoStart?: boolean;
  onEnd: () => void;
}

export const CountDownProvider: FC<CountDownProviderProps> = ({
  duration,
  children,
  autoStart,
  onEnd,
}): ReactElement => {
  const [counter, setCounter] = useState(duration);
  const [paused, setPaused] = useState<boolean>(false);
  const timerState = useRef<'idle' | 'paused' | 'active' | 'ended'>('idle');
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const run = useCallback(() => {
    timeout.current = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter <= 0) {
          clearTimeout(timeout.current);
          timerState.current = 'ended';
          return duration;
        }
        return currentCounter - 1;
      });
    }, 1000);
  }, [duration]);

  const pause = () => {
    clearTimeout(timeout.current);
    setPaused(true);
    timerState.current = 'paused';
  };

  const resume = () => {
    if (paused) {
      setPaused(false);
      run();
      timerState.current = 'active';
    }
  };

  const stop = () => {
    setPaused(true);
    setCounter(duration);
    clearTimeout(timeout.current);
    timerState.current = 'idle';
  };

  const restart = () => {
    setPaused(false);
    clearTimeout(timeout.current);
    setCounter(duration);
    run();
  };

  const start = useCallback(() => {
    timerState.current = 'active';
    setPaused(false);
    setCounter(duration);
    run();
  }, [duration, run]);

  const controls = {
    pause,
    start,
    restart,
    stop,
    resume,
  };

  if (timerState.current === 'ended') {
    if (onEnd) onEnd();
    timerState.current = 'idle';
  }

  useEffect(() => {
    if (autoStart && !timeout.current) {
      start();
    }
    return () => {
      if (timeout.current) {
        setCounter(duration);
        clearTimeout(timeout.current);
      }
    };
  }, [autoStart, duration, start]);

  return children(counter, controls);
};

CountDownProvider.defaultProps = {
  duration: 3000,
};

export default CountDownProvider;
