import * as React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
    Form, FormFeedback, FormField, FormFieldContainer, FormFieldLabel,
    FormFieldKey, FormFieldInput, FormSubmitButton, FormSubmitButtonText,
} from "./forms.styles";

export type GenericFormParams = {
    fields: FormField[];
    onSubmit: any;
    buttonText: string;
}

export const GenericForm = (params: GenericFormParams) => {
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
                            <FormFieldKey
                                color={
                                    errorState[field.key] &&
                                    errorState[field.key].length ? 'var(--color-error)': 'none'
                                }
                            >
                                {field.display}
                            </FormFieldKey>
                            <FormFieldInput {...{
                                    borderColor: errorState[field.key] &&
                                    errorState[field.key].length ? 'var(--color-error)': 'none'
                                }}
                                    type={field.type} name={field.key}
                                    autoComplete={field.autoComplete}
                                    ref={ register({ validate: (value: string) => {
                                        const validationErrors = field.validator(value);
                                        setErrorState((prevState: any) => ({ ...prevState, [field.key]: validationErrors }));
                                        return validationErrors[0];
                                        }
                                    }
                                )}
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