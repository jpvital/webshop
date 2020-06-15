import styled from 'styled-components';
import { Button, Text, Input } from './generic';

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
    padding-top: ${(props: any) => (props.paddingTop ? props.paddingTop : '0px')};
    padding-bottom: ${(props: any) => (props.paddingBottom ? props.paddingBottom : '0px')};
`;

export const FormFieldKey=styled(Text)`
    padding-bottom: 1rem;
    font-weight: 500;
`;

export const FormFieldInput=styled(Input)`
    width: 100%;
    height: 100%;
`;

export const FormSubmitButton=styled(Button)`
    width: 100%;
    padding-left: 0px;
    padding-right: 0px
`;

export const FormSubmitButtonText=styled(Text)`
    text-align: center;
    width: 100%;
`;