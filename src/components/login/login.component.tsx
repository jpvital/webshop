import * as React from 'react';
import { Button, Text, Headers } from '../generic/generic';
import { userIcon, closeIcon } from '../generic/icons';
import { PopupBackground, PopupContent, PopupSection, PopupHeader } from '../generic/popups';
import { LoginForm } from './login.form';
import { RegisterForm } from './register.form';

export const Login = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [formContent, setFormType] = React.useState(false);

    return (
        <>
            <Button style={{ marginBottom: '2rem' }} onClick={() => { setFormType(true); setShowModal(true)} }>
                {userIcon()}
                <Text>Login</Text>
            </Button>
            {showModal ?
            <PopupBackground>
                <PopupContent>
                    <PopupHeader>
                    <Headers.Header2>
                        <Text>{formContent ? 'Enter your credentials' : 'Create new account'}</Text>
                    </Headers.Header2>
                    <Button style={{marginLeft: 'auto'}} onClick={() => setShowModal(false)} >
                        {closeIcon()}
                    </Button>
                    </PopupHeader>
                    <PopupSection style={{padding: '4rem'}}>
                        {formContent ?
                            <>
                                <LoginForm/>
                                <Text style={{textAlign: 'center', paddingTop: '2rem'}} onClick={() => setFormType(false)}>
                                    Don't have an account? Sign up!
                                </Text>
                            </> : <RegisterForm />}
                    </PopupSection>
                </PopupContent>
            </PopupBackground> : null}
        </>
    );
};