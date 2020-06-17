import { inputValidators } from '../../utils/validators';
import { Autocomplete } from '../forms/forms.styles';
import * as React from 'react';
import { AuthService, CognitoLogin } from '../../services/auth.service';
import { GenericForm } from '../forms/generic-form.component';

type HandleSubmitProps = {
  email: string;
  password: string;
}

export function Login() {
  const authService = new AuthService();
   
  const fields = [
    {
      key: 'email', display: 'E-mail',
      validator: inputValidators.email,
      type: 'text',
      autoComplete: Autocomplete.ON
    },
    {
      key: 'password', display: 'Password',
      validator: inputValidators.password, type: 'password',
      autoComplete: Autocomplete.OFF
    }
  ];

  const handleSubmit = (props: HandleSubmitProps): void => {
    const { email, password } = props;
    const loginCredentials: CognitoLogin = {
      username: email, password,
    };
    authService.login(loginCredentials);
  };

  return <GenericForm fields={fields} onSubmit={handleSubmit} buttonText='Login'/>
};