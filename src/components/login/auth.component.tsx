import * as React from 'react';
import { Button, Text, Headers, ButtonText } from '../generic/generic';
import { userIcon, closeIcon } from '../generic/icons';
import { PopupBackground, PopupContent, PopupSection, PopupHeader } from '../popups/popups';
import { Login as LoginForm } from './login.component';                                   
import { Registration as RegistrationForm } from './registration.component';
import verbose from '../../global/verbose';

export const Auth = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [formContent, setFormType] = React.useState(false);
    const { ENTER_CREDENTIALS, CREATE_ACCOUNT, NO_ACC_SIGN_UP } = verbose.USER_ACTION;
    return (
        <>
            <Button style={{ marginBottom: '2rem' }} onClick={() => { setFormType(true); setShowModal(true)} }>
                {userIcon()}
                <ButtonText>Login</ButtonText>
            </Button>
            {showModal ?
            <PopupBackground>
                <PopupContent>
                    <PopupHeader>
                    <Headers.Header2>
                        <Text>
                            {formContent ? ENTER_CREDENTIALS : CREATE_ACCOUNT}
                        </Text>
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
                                    {NO_ACC_SIGN_UP}
                                </Text>
                            </> : <RegistrationForm />}
                    </PopupSection>
                </PopupContent>
            </PopupBackground> : null}
        </>
    );
};