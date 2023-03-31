export type TUser = {
  id: string;
  email: string;
  joinDate: Date;
  lastLogin: Date;
  password: string;
  username: string;
  userIcon: string;
};

export type TUserCreate = TUser & { userIcon?: string };

export type TUserUpdate = {
  id: string;
  email?: string;
  lastLogin?: Date;
  password?: string;
  username?: string;
  userIcon?: string;
};

export type TUserLogin = {
  username: string;
  password: string;
}

export type TChat = {
  id: string;
  icon: string;
  // messages: Message[];
  Users: TUser[];
};
