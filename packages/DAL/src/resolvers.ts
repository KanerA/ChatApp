import { pubsub } from "./pubsub";
import { createUser, updateUser } from "./utils/userActions/userMutations";
import { getUserById } from "./utils/userActions/userQueries";

export const resolvers = {
  Query: {
    GetUserById: (_, { id }) => getUserById(id),
  },
  Mutation: {
    CreateUser: (_, { userData }) => createUser(userData),
    UpdateUser: (_, { userData }) => updateUser(userData),
  },
  Subscription: {
    subscribeToUsers: {
      resolve: (message) => {
        console.log(message);
        return message;
      },
      subscribe: () => pubsub.asyncIterator(["SUBSCRIBE_TO_USERS"]),
    },
  },
};
