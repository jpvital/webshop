import { NewAmplifyCognitoUser, CognitoLogin } from "./auth.service";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

const poolData = { 
    UserPoolId : process.env.REACT_APP_AWS_USER_POOL_ID as string,
    ClientId : process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID as string,
};

const userPool = new CognitoUserPool(poolData);
export class CognitoHandler {
    signUp(newUser: NewAmplifyCognitoUser) {
        const { username, password, attributes } = newUser;
        const attributeList = [];
        const dataEmail = {
            Name : 'email',
            Value : attributes ? attributes.email : '',
        };
        const dataName = {
            Name: 'name',
            Value: attributes ? attributes.name : '',
        }

        const attributeEmail = new CognitoUserAttribute(dataEmail);
        const attributeName = new CognitoUserAttribute(dataName);

        attributeList.push(attributeEmail);
        attributeList.push(attributeName);

        const createdUser=userPool.signUp(username, password, attributeList, [], (err, data) => {
            if (err) {
                console.log(err.message);
            }else{
                console.log(data);
                return data ? data.user : {};
            }
        });
        return createdUser;
    };
    
    confirmSignUp(username: string, confirmationCode: string){
        const cognitoUser = new CognitoUser({Username: username, Pool: userPool});
        cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                console.log(err.message);
            } else{
                console.log('Successfully verified code!');
            }
        });
    };
    signIn(loginProps: CognitoLogin){};
}