export type UserCreateType = {
  id: string;
  email: string;
  joinDate: Date;
  lastLogin: Date;
  password: string;
  username: string;
  userIcon?: string;
};

export type UserUpdateType = {
  id: string;
  email?: string;
  lastLogin?: Date;
  password?: string;
  username?: string;
  userIcon?: string;
};
