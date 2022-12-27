import { gql } from "apollo-server-core";
export const typeDefs = gql`
  type User {
    id: String!
    email: String!
    joinDate: String!
    lastLogin: String!
    password: String!
    username: String!
    userIcon: String
  }

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

  type crudMessage {
    id: String
    isError: Boolean!
    errorMessage: String
  }

  type Query {
    GetUserById(id: String): String!
  }

  type Mutation {
    CreateUser(userData: UserDataCreate): crudMessage!
    UpdateUser(userData: UserDataUpdate): crudMessage!
  }

  type Subscription {
    subscribeToUsers: User
  }
`;
