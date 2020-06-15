import * as React from 'react';
import { useInput } from '../../hooks/input.hook';
import { Input, Button, Text, Form, FormLabel } from '../generic/generic';

export function RegisterForm() {
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
    
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        alert(`Registering Email ${email} ${password}`);
        resetEmail();
        resetPassword();
    }
    
    return (
      <Form onSubmit={handleSubmit}>
        <FormLabel style={{height: '6rem'}}>
            <Text style={{paddingBottom: '1rem', fontWeight: 500}}>Email</Text>
            <Input type="text" {...bindEmail} style={{width: '100%', height: '100%'}}/>
        </FormLabel>
        
        <FormLabel style={{height: '6rem', paddingTop: '2rem', paddingBottom: '1.8rem'}}>
            <Text style={{paddingBottom: '1rem', fontWeight: 500}}>Password</Text>
            <Input type='text' {...bindPassword} style={{width: '100%', height: '100%'}}/>
        </FormLabel>
        <Button style={{width: '100%', paddingLeft: '0px', paddingRight: '0px'}} type='submit'>
            <Text style={{textAlign: 'center', width: '100%'}}>Register</Text>
        </Button>
      </Form>
    );
  }