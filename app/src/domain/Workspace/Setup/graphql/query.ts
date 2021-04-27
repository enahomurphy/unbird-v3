import { gql } from '@apollo/client';

export const DOMAIN_SEARCH_QUERY = gql`
  query domainSearch(
    $domain: String!
  ) {
    domainSearch(
      payload: {
        domain: $domain
      }
    ) {
      exists
    }
  }
`;

export const USER_BY_ID_QUERY = gql`
  query userById(
    $id: Int!
  ) {
    userById(
      payload: {
        id: $id
      }
    ) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
