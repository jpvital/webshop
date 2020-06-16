import { inputValidators } from '../../utils/validators';
import { AuthForm, Autocomplete } from '../generic/forms';
import * as React from 'react';

type HandleSubmitProps = {
  email: string;
  password: string;
}

export function LoginForm() {
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
  };

  return <AuthForm fields={fields} onSubmit={handleSubmit} buttonText='Login'/>
};