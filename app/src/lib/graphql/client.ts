/* eslint-disable no-param-reassign */
import { from, ApolloClient, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { logger, storage } from 'lib/utils';
import { keys } from 'lib/config';
import cache from './cache';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      logger.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    logger.error(`[Network error]: ${networkError.stack}`);
  }

  if (
    networkError &&
    'statusCode' in networkError &&
    networkError.statusCode === 401
  ) {
    storage.clear();
    networkError.name = 'NotAuthorized';
  }
});

const retryLink = new RetryLink({
  attempts: (count, _, error) => {
    if (count > 1000) {
      return false;
    }
    return error.name === 'TypeError';
  },
  delay: () => 2000,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'app-env': process.env.APP_ENV,
    platform: 'web',
    authorization: storage.token ? `Bearer ${storage.token}` : '',
    timezone: window.Intl
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : '',
  },
}));

const httpLink = new HttpLink({
  uri: `${keys.apiUrl}/graphql`,
  fetch: (...args) => fetch(...args),
});

const link = from([errorLink, retryLink, authLink.concat(httpLink)]);

const client = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});

export default client;
