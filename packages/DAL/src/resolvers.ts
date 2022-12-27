import { pubsub } from "./pubsub";
import { createUser, updateUser } from "./utils/userActions/userMutations";

export const resolvers = {
  Query: {
    getSomething: () => "assaf",
  },
  Mutation: {
    CreateUser: (_, { userData }) => createUser(userData),
    UpdateUser: (_, { userData }) => updateUser(userData),
  },
  Subscription: {},
};
