import { Auth } from 'aws-amplify';

export type NewCognitoUser = {
    password: string;
    username: string,
    attributes?: {
        email: string;
        name: string;
        phone_number?: string;
    }
}

export type CognitoLogin = {
    username: string;
    password: string;
};

export class AuthService {
    private apiService = Auth;
    
    register(newUserProps: NewCognitoUser){
        return this.apiService.signUp(newUserProps);
    };

    handleConfirmationCode(username: string, confirmationCode: string){
        return this.apiService.confirmSignUp(username, confirmationCode);
    };

    login(loginProps: CognitoLogin){
        return this.apiService.signIn(loginProps);
    };

};