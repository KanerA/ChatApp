import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GET_USER_BY_ID = gql`
    query GetUserById($id: String) {
  GetUserById(id: $id) {
    id
    email
    joinDate
    lastLogin
    password
    username
    userIcon
  }
}
`;

export const useGetUserById = (id: string) => {
  const [getUser, { loading, called, data, networkStatus, error, variables }] = useLazyQuery(GET_USER_BY_ID);
  console.log({ loading, called, data, networkStatus, error, variables })
  return getUser;
};