import { gql, useMutation, useQuery } from "@apollo/client";

export const SIGN_UP_USER = gql`
    mutation CreateUser($userData: UserDataCreate) {
        CreateUser(userData: $userData){
            id
            isError
            errorMessage
        }
    }
`;

export const useSignUpUser = () => {
    const [func, { loading, data, called, error }] = useMutation(SIGN_UP_USER);
    if (loading) console.log("LOADING!")
    if (error) console.log("ERROR");
    // TODO: save data to local storage here and not in component
    return func;
}