import * as React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
    Form, FormFeedback, FormFieldContainer, FormFieldLabel,
    FormFieldKey, FormFieldInput, FormSubmitButton, FormSubmitButtonText,
} from "./forms.styles";
import { inputValidators } from '../../utils/validators';

const CONFIRMATION_CODE_LABEL: string = 'Confirmation code:';
const CONFIRMATION_CODE_KEY: string = 'confirmationCode';
const CONFIRMATION_CODE_BUTTON_TEXT: string = 'Submit code';

export type CognitoConfirmationCodeProps = {
    confirmationCode: string;
    username: string;
}

export const ConfirmationCodeForm = (onSubmit: any) => {
    const formErrorState: any = { confirmationCode: [] };
    const { handleSubmit, register, errors } = useForm({ validateCriteriaMode: "all" });

    const [errorState, setErrorState] = React.useState(formErrorState);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormFieldContainer>
                <FormFieldLabel>
                    <FormFieldKey color={errorState.confirmationCode.length ? 'var(--color-error)': 'none' }>
                        {CONFIRMATION_CODE_LABEL}
                    </FormFieldKey>
                    <FormFieldInput {...{borderColor: errorState.confirmationCode.length ? 'var(--color-error)': 'none' }}
                        type='text' name={CONFIRMATION_CODE_KEY}
                        autoComplete='off'
                        ref={ register({ validate: (value: string) => {
                            const validationErrors = inputValidators.confirmationCode(value);
                            setErrorState((prevState: any) => ({ ...prevState, confirmationCode: validationErrors }));
                            return validationErrors[0];
                            }
                        })}
                    />
                </FormFieldLabel>
                <ErrorMessage errors={errors} name={CONFIRMATION_CODE_KEY}>
                    {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (
                        <FormFeedback key={type}>{message}</FormFeedback>
                    ))}
                </ErrorMessage>
            </FormFieldContainer>
            <FormSubmitButton type='submit'>
                <FormSubmitButtonText>{CONFIRMATION_CODE_BUTTON_TEXT}</FormSubmitButtonText>
            </FormSubmitButton>
        </Form>
    );
};