import { gql } from '@apollo/client';

export const CREATE_WORKSPACE_MUTATION = gql`
  mutation createWorkspace(
    $domain: String!
    $ownerId: Int!
    $name: String!
  ) {
    createWorkspace(
      createWorkspaceInput: {
        domain: $domain
        ownerId: $ownerId
        name: $name
      }
    ) {
      id
      domain
      ownerId
      name
    }
  }
`;
