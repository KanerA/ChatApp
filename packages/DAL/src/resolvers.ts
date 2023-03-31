import { pubsub } from "./pubsub";
import { createUser, loginUser, setUserIcon, updateUser } from "./utils/userActions/userMutations";
import { getUserById, getUsersByChat } from "./utils/userActions/userQueries";

export const resolvers = {
  Query: {
    GetUserById: (_, { id }) => getUserById(id),
    GetUsersByChat: (_, { chatId }) => getUsersByChat(chatId),
  },
  Mutation: {
    CreateUser: (_, { userData }) => createUser(userData),
    UpdateUser: (_, { userData }) => updateUser(userData),
    LoginUser: (_, { userData }) => loginUser(userData),
    SetUserIcon: (_, { icon }) => setUserIcon(icon)
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
