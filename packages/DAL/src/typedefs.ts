import { gql } from "apollo-server-core";
export const typeDefs = gql`
  input UserDataInput {
    id: String!
    email: String!
    joinDate: String!
    lastLogin: String!
    password: String!
    username: String!
    userIcon: String
  }

  type Query {
    getSomething: String
  }

  type Mutation {
    CreateUser(user: UserDataInput): String
  }

  type Subscription {
    subscribeToWords: [String]
  }
`;
