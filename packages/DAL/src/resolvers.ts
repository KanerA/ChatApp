import { pubsub } from "./pubsub";
import { createUser } from "./utils/userActions/userMutations";

export const resolvers = {
  Query: {
    getSomething: () => "assaf",
  },
  Mutation: {
    CreateUser: (_, { user }) => createUser(user),
  },
  Subscription: {},
};
