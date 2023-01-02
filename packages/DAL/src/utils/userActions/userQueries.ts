import { prisma } from "../../prismaClient";

export const getUserById = async (id: string) => {
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
};
