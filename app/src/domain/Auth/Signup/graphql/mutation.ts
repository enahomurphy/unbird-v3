import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation Signup(
  $firstName: String!
  $lastName: String!
  $email: String!
  $jobTitle: String!
  $password: String!
) {
  signup(
    payload: {
      firstName: $firstName
      lastName: $lastName
      email: $email
      jobTitle: $jobTitle
      password: $password
    }
  ) {
    token
  }
}
`;
