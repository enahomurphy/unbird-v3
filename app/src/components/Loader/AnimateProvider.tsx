import { ReactElement } from 'react';
import { useTween } from 'react-use';

export interface AnimationProviderProps {
  duration: number;
  show: boolean;
  children: (counter: number) => ReactElement;
  easingFunction: string;
}

export const AnimationProvider = ({
  easingFunction,
  duration,
  children,
}: AnimationProviderProps): ReactElement => {
  const elapsed = useTween(easingFunction, duration);
  const value = elapsed * 100;
  return children(value);
};

AnimationProvider.defaultProps = {
  duration: 3000,
  easingFunction: 'linear',
};

export default AnimationProvider;
