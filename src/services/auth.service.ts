// import { Auth } from 'aws-amplify';
import { CognitoHandler } from './aws-cognito.handler';

export type NewAmplifyCognitoUser = {
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
    private client = new CognitoHandler();
    
    register(newUserProps: NewAmplifyCognitoUser){
        return this.client.signUp(newUserProps);
    };

    handleConfirmationCode(username: string, confirmationCode: string){
        return this.client.confirmSignUp(username, confirmationCode);
    };

    login(loginProps: CognitoLogin){
        return this.client.signIn(loginProps);
    };

};