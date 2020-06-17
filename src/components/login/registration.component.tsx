import { inputValidators } from '../../utils/validators';
import { Autocomplete } from '../forms/forms.styles';
import * as React from 'react';
import { AuthService, NewCognitoUser } from '../../services/auth.service';
import { GenericForm } from '../forms/generic-form.component';
import { ConfirmationCodeForm, CognitoConfirmationCodeProps } from '../forms/confirmation-code-form';

type HandleSubmitProps = {
  email: string;
  password: string;
  firstName: string;
}

export function Registration() {
  const authService = new AuthService();
  
  const registrationFormState: any = {};
  const [registrationState, setRegistrationState] = React.useState(registrationFormState);

  const registerFields = [
    {
      key: 'firstName', display: 'First Name',
      validator: inputValidators.firstName,
      type: 'text', autoComplete: Autocomplete.ON,
    },
    {
      key: 'email', display: 'E-mail',
      validator: inputValidators.email,
      type: 'text', autoComplete: Autocomplete.ON,
    },
    {
      key: 'password', display: 'Password',
      validator: inputValidators.password, type: 'password',
      autoComplete: Autocomplete.OFF,
    },
  ];

  const confirmationCodeFields = [
    {
      key: 'confirmationCode', display: 'Confirmation code',
      validator: inputValidators.confirmationCode,
      type: 'text', autoComplete: Autocomplete.OFF,
    },
  ];

  const handleSubmitRegister = (props: HandleSubmitProps): void => {
    const { email, password, firstName } = props;
    const newUser: NewCognitoUser = {
      username: email,
      password,
      attributes: {
        email,
        name: firstName,
      }
    };
    authService.register(newUser);
    setRegistrationState((prevState: any) => ({ ...prevState, email }));
  };

  const handleSubmitConfirmationCode = (props: CognitoConfirmationCodeProps) => {
    const { confirmationCode } = props;
    const { email } = registrationState;
    authService.handleConfirmationCode(email, confirmationCode);
    setRegistrationState((prevState: any) => ({ ...prevState, confirmationCode }));
  };

  // return !registrationState.email ?
  //   <GenericForm fields={registerFields} onSubmit={handleSubmitConfirmationCode} buttonText='Register'/>
  //   : (!registrationFormState.confirmationCode ? <ConfirmationCodeForm onSubmit={handleSubmitConfirmationCode}/>
  //       : <div>Success biotch</div>);
  return !registrationState.email ?
    <GenericForm fields={registerFields} onSubmit={handleSubmitRegister} buttonText='Register'/>
    : (!registrationState.confirmationCode ?
        <GenericForm fields={confirmationCodeFields} onSubmit={handleSubmitConfirmationCode} buttonText='Submit code'/>
        : <div>Success biotch</div>);
};