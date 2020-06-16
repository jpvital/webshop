import styled from 'styled-components';
import * as React from 'react';
import { Button, Text, Input, ButtonText } from './generic';
import { useForm, ErrorMessage } from 'react-hook-form';

export enum Autocomplete {
    OFF = 'off',
    ON = 'on',
}

type FormField = {
    key: string;
    display: string;
    type: string;
    validator?: any;
    bind?: any;
    autoComplete: Autocomplete;
};

type AuthFormParams = {
    fields: FormField[];
    onSubmit: any;
    buttonText: string;
}

const Form=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    alignItems: left;
`;

const FormFieldLabel=styled.label`
    display: flex;
    flex-direction: column;
    height: 6rem;
`;

const FormFieldKey=styled(Text)`
    padding-bottom: 1rem;
    font-weight: 500;
    color: ${(props: any) => (props.color || 'var(--color-primary)')};
`;

const FormFieldInput=styled(Input)`
    width: 100%;
    height: 100%;
    border-color: ${(props: any) => (props.borderColor || 'none')};
`;

const FormFeedback=styled(Text)`
    color: var(--color-error);
    font-size: x-small;
    white-space: normal;
`;

const FormSubmitButton=styled(Button)`
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
`;

const FormSubmitButtonText=styled(ButtonText)`
    text-align: center;
    width: 100%;
`;

const FormFieldContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.8rem;
`;

export const AuthForm = (params: AuthFormParams) => {
    const { fields, onSubmit, buttonText } = params;
    const { handleSubmit, register, errors } = useForm({ validateCriteriaMode: "all" });
    const formErrorState: any = {};
    
    fields.forEach((field: FormField) => {
        formErrorState[field.key] = [];
    });

    const [errorState, setErrorState] = React.useState(formErrorState);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            {
            fields.map((field: FormField, i: number) => {
                return (
                    <FormFieldContainer key={field.key}>
                        <FormFieldLabel>
                            <FormFieldKey color={errorState[field.key].length ? 'var(--color-error)': 'none' }>
                                {field.display}
                            </FormFieldKey>
                            <FormFieldInput {...{borderColor: errorState[field.key].length ? 'var(--color-error)': 'none' }}
                                type={field.type} name={field.key}
                                autoComplete={field.autoComplete}
                                ref={ register({ validate: (value: string) => {
                                    const validationErrors = field.validator(value);
                                    setErrorState((prevState: any) => ({ ...prevState, [field.key]: validationErrors }));
                                    return validationErrors[0];
                                    }
                                })}
                            />
                        </FormFieldLabel>
                        <ErrorMessage errors={errors} name={field.key}>
                            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (
                                <FormFeedback key={type}>{message}</FormFeedback>
                            ))}
                        </ErrorMessage>
                    </FormFieldContainer>
                );
            })
            }
            <FormSubmitButton type='submit'>
                <FormSubmitButtonText>{buttonText}</FormSubmitButtonText>
            </FormSubmitButton>
        </Form>
    )
};