import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
    mutation LoginUser($userData: UserLogin!) {
        LoginUser(userData: $userData)
    }
`;

export const useLoginUser = () => {
    const [loginFunc] = useMutation(LOGIN_USER);
    return loginFunc;
};