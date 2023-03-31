// import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces";
import config from '../config.json'
import { ApolloClient, InMemoryCache, MutationFunction } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

const API_URL = config.api.url;

export default new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export type TUser = {
  id: string;
  email: string;
  joinDate: Date;
  lastLogin: Date;
  password: string;
  username: string;
  userIcon?: string
};

export type TUserCreate = TUser & { userIcon?: string };

interface ILogin {
  status?: boolean;
  user?: User;
  msg?: string;
}

interface ISetAvatar {
  image: string;
  isSet: boolean;
}

export const signUp = (FormData: {
  password: string,
  username: string,
  email: string
}, signupFunction: MutationFunction<any, any>) => {
  const date = new Date();
  const id = uuidv4();
  const signUpData: TUserCreate = {
    password: FormData.password,
    username: FormData.username,
    email: FormData.email,
    id,
    joinDate: date,
    lastLogin: date,
  }
  return signupFunction({ variables: { userData: signUpData } });
}

