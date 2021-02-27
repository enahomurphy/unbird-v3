/* eslint-disable no-underscore-dangle */
import {
  defaultDataIdFromObject,
  InMemoryCache,
  makeVar,
} from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
  },
  dataIdFromObject: (object) => {
    switch (object.__typename) {
      default:
        return defaultDataIdFromObject(object);
    }
  },
});

export default cache;
