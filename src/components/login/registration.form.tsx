import * as React from 'react';
import { useInput } from '../../utils/hooks';
import { inputValidators } from '../../utils/validators';
import {
  Form, FormFieldLabel, FormSubmitButton, FormSubmitButtonText,
  FormFieldKey, FormFieldInput
} from '../generic/forms';

export function RegistrationForm() {
  const { value: email, bind: bindEmail } = useInput('');
  const { value: firstName, bind: bindFirstName } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  const fields = [
    {
      field: 'firstName', key: 'First Name',
      validator: inputValidators.firstName,
      bind: bindFirstName, type: 'text',
    },
    {
      field: 'email', key: 'E-mail',
      validator: inputValidators.email, type: 'text',
      bind: bindEmail, labelProps: { paddingTop: '2rem', }
    },
    {
      field: 'password', key: 'Password',
      validator: inputValidators.password, type: 'password',
      bind: bindPassword, labelProps:{ paddingTop: '2rem', paddingBottom: '1.8rem' }
    }
  ];

  const handleSubmit = (): void => {
    // validateForm({email, firstName, password});
  };

  return (
    <Form onSubmit={handleSubmit}>
      {
        fields.map(field => (
          <FormFieldLabel {...field.labelProps}>
            <FormFieldKey>{field.key}</FormFieldKey>
            <FormFieldInput {...field.type} {...field.bind}/>
          </FormFieldLabel>
        ))
      }
      <FormSubmitButton type='submit'>
          <FormSubmitButtonText>Register</FormSubmitButtonText>
      </FormSubmitButton>
    </Form>
  );
};