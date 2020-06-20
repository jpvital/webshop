import { inputValidators } from '../../utils/validators';
import { Autocomplete } from '../forms/forms.styles';
import * as React from 'react';
import { AuthService, NewCognitoUser } from '../../services/auth.service';
import { GenericForm } from '../forms/generic-form.component';
import { CognitoConfirmationCodeProps } from '../forms/confirmation-code-form';
import verbose from '../../global/verbose';

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
      key: 'confirmationCode', display: verbose.INFO.CONFIRMATION_CODE_SENT,
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

  const formProps: any = {
    fields: !registrationState.email ? registerFields : confirmationCodeFields,
    onSubmit: !registrationState.email ? handleSubmitRegister : handleSubmitConfirmationCode,
    buttonText: !registrationState.email ? 'Register' : 'Submit code',
  }

  return !registrationState.confirmationCode ?
    <GenericForm {...formProps}/> : <div>Success biotch</div>;
};