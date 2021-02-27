import { createInstance } from '@optimizely/react-sdk';
import { keys } from 'lib/config';

const optimizely = createInstance({
  sdkKey: keys.optimizely,
});

export default optimizely;
