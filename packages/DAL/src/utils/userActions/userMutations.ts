import { pubsub } from "../../pubsub";
import { prisma } from "../../prismaClient";
import { formatDate, isValidDate } from "../utilities";
import { TUserCreate, TUserUpdate } from "../../types";

const SubscriptionTopic = "SUBSCRIBE_TO_USERS";

export const createUser = async (userData: TUserCreate) => {
  try {
    if (!userData) throw new Error("there was a problem!!!")
    if (!isValidDate(userData.joinDate) || !isValidDate(userData.lastLogin))
      throw new Error("Error in date format");
    const formattedUser = {
      ...userData,
      joinDate: formatDate(userData.joinDate),
      lastLogin: formatDate(userData.lastLogin),
    };

    // send message to kafka
    // *********************
    // send subscription

    const res = await prisma.user.create({
      data: formattedUser,
    });
    await pubsub.publish(SubscriptionTopic, res);
    return {
      id: res.id,
      isError: false,
    };
  } catch (err) {
    console.log(err);
    return {
      isError: true,
      errorMessage: err.message,
    };
  }
};

export const updateUser = async (userData: TUserUpdate) => {
  try {
    if (!isValidDate(userData?.lastLogin))
      throw new Error("Error in date format");
    const formattedUser = {
      ...userData,
      lastLogin: formatDate(userData?.lastLogin),
    };
    const res = await prisma.user.update({
      where: { id: userData.id },
      data: formattedUser,
    });
    await pubsub.publish(SubscriptionTopic, res);
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
