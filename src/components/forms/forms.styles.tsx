import styled from 'styled-components';
import { Button, Text, Input, ButtonText } from '../generic/generic';

export enum Autocomplete {
    OFF = 'off',
    ON = 'on',
}

export type FormField = {
    key: string;
    display: string;
    type: string;
    validator?: any;
    bind?: any;
    autoComplete: Autocomplete;
};

export const Form=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    alignItems: left;
`;

export const FormFieldLabel=styled.label`
    display: flex;
    flex-direction: column;
    height: 6rem;
`;

export const FormFieldKey=styled(Text)`
    padding-bottom: 1rem;
    font-weight: 500;
    color: ${(props: any) => (props.color || 'var(--color-primary)')};
`;

export const FormFieldInput=styled(Input)`
    width: 100%;
    height: 100%;
    border-color: ${(props: any) => (props.borderColor || 'none')};
`;

export const FormFeedback=styled(Text)`
    color: var(--color-error);
    font-size: x-small;
    white-space: normal;
`;

export const FormSubmitButton=styled(Button)`
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
`;

export const FormSubmitButtonText=styled(ButtonText)`
    text-align: center;
    width: 100%;
`;

export const FormFieldContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.8rem;
`;