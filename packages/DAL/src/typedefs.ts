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

  input UserLogin {
    username: String
    password: String
  }

  type Query {
    GetUserById(id: String): User!
    GetUsersByChat(chatId: String): [User]
  }

  type Mutation {
    CreateUser(userData: UserDataCreate): crudMessage!
    UpdateUser(userData: UserDataUpdate): crudMessage!
    LoginUser(userData: UserLogin!): Boolean!
    SetUserIcon(icon: String): crudMessage!
  }

  type Subscription {
    subscribeToUsers: User
  }
`;
