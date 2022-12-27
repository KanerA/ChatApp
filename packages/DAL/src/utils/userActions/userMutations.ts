import { prisma } from "../../prismaClient";
import { formatDate, isValidDate } from "../utilities";
import { UserCreateType, UserUpdateType } from "../../types";

export const createUser = async (userData: UserCreateType) => {
  try {
    if (!isValidDate(userData.joinDate) || !isValidDate(userData.lastLogin))
      throw new Error("Error in date format");
    const formattedUser = {
      ...userData,
      joinDate: formatDate(userData.joinDate),
      lastLogin: formatDate(userData.lastLogin),
    };
    await prisma.user.create({
      data: formattedUser,
    });
    return "user created successfully";
  } catch (err) {
    console.log(err);
    return "Error in creating user";
  }
};

export const updateUser = async (userData: UserUpdateType) => {
  try {
    if (!isValidDate(userData?.lastLogin))
      throw new Error("Error in date format");
    const formattedUser = {
      ...userData,
      lastLogin: formatDate(userData?.lastLogin),
    };
    await prisma.user.update({
      where: { id: userData.id },
      data: formattedUser,
    });
    return "success";
  } catch (err) {
    console.log("Error in updating user", {
      error: err,
      data: userData,
      timestamp: new Date(),
    });
    return "Error in updating user";
  }
};
