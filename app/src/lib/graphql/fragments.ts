import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    name
    email
    avatar
  }
`;

