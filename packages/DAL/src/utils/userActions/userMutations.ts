import fs from "fs";
import path from "path";
import { prisma } from "../../prismaClient";
import { pubsub } from "../../pubsub";
import { v4 as uuidv4 } from "uuid";
import { UserInputType } from "../../types";
import { formatDate, isValidDate } from "../utilities";

export const createUser = async (userData: UserInputType) => {
  try {
    if (!isValidDate(userData.joinDate))
      throw new Error("Error in date format");
    const formattedUser = {
      ...userData,
      joinDate: formatDate(userData.joinDate),
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
