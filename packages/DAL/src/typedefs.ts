import { gql } from "apollo-server-core";
export const typeDefs = gql`
  input UserDataCreate {
    id: String!
    email: String!
    joinDate: String!
    lastLogin: String!
    password: String!
    username: String!
    userIcon: String
  }

  input UserDataUpdate {
    id: String!
    email: String
    lastLogin: String
    password: String
    username: String
    userIcon: String
  }

  type Query {
    getSomething: String
  }

  type Mutation {
    CreateUser(userData: UserDataCreate): String!
    UpdateUser(userData: UserDataUpdate): String!
  }

  type Subscription {
    subscribeToWords: [String]
  }
`;
