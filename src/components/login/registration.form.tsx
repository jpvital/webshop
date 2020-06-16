import { inputValidators } from '../../utils/validators';
import { AuthForm, Autocomplete } from '../generic/forms';
import * as React from 'react';

type HandleSubmitProps = {
  email: string;
  password: string;
  firstName: string;
}

export function RegistrationForm() {
  const fields = [
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
    }
  ];

  const handleSubmit = (props: HandleSubmitProps): void => {
    const { email, password, firstName } = props;
  };

  return <AuthForm fields={fields} onSubmit={handleSubmit} buttonText='Register'/>
};