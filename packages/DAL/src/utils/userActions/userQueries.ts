import { prisma } from "../../prismaClient";

export const getUserById = async (id: string) => {
  try {
    const userFromDB = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        email: true,
        id: true,
        joinDate: true,
        lastLogin: true,
        password: true,
        userIcon: true,
        username: true,
        chats: {
          select: {
            id: true,
          },
        },
      },
    });
    return userFromDB;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const getUsersByChat = async (chatId: string) => {
  // test only after completing mutations for user and messages
  const response = await prisma.user.findMany({
    where: {
      chats: {
        some: {
          id: chatId,
        },
      },
    },
  });
  console.log(response);
  return response;
};
