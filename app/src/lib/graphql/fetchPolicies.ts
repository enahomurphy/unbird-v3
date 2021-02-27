import { DefaultOptions } from '@apollo/client';

export const fetchPolicy: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export default fetchPolicy;
