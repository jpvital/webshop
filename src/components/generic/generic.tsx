import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    --bg-opacity: 1;
    --text-opacity: 1;
    display: flex;
    background-color: ${props => (props.theme.backgroundColor ? props.theme.backgroundColor : 'black')};
    border-radius: ${props => (props.theme.borderRadius ? props.theme.borderRadius : '0.75rem')};
    border-width: ${props => (props.theme.borderWidth ? props.theme.borderWidth : '1px')};
    box-shadow: ${props => (props.theme.boxShadow ? props.theme.boxShadow : '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0)')};
    color: ${props => (props.theme.color ? props.theme.color : 'white')};
    cursor: ${props => (props.theme.cursor ? props.theme.cursor : 'pointer')};
    font-size: ${props => (props.theme.fontSize ? props.theme.fontSize : '0.875')};
    font-weight: ${props => (props.theme.fontSize ? props.theme.fontSize : '600')};
    padding-left: ${props => (props.theme.paddingLeft ? props.theme.paddingLeft : '1rem')};
    padding-right: ${props => (props.theme.paddingRight ? props.theme.paddingRight : '1rem')};
    padding-top: ${props => (props.theme.paddingTop ? props.theme.paddingTop : '0.5rem')};
    padding-bottom: ${props => (props.theme.paddingBottom ? props.theme.paddingBottom : '0.5rem')};
    text-transform: uppercase;
    transition: all 0.15s ease 0s;
`;

export const Image=styled.img`
    width: ${props => (props.theme.width ? props.theme.width : '20rem')};
    height: ${props => (props.theme.height ? props.theme.height : '20rem')};
    object-fit: ${props => (props.theme.object_fit ? props.theme.object_fit : 'cover')};;
`;

export const Text=styled.span`
    text-align: ${props => (props.theme.textAlign ? props.theme.textAlign : 'left')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
`;

export const Input=styled.input`
    text-align: ${props => (props.theme.textAlign ? props.theme.textAlign : 'center')};
    width: 15%;
`;

export const Headers = {
    Header3: styled.h3`
        font-size: 1.6rem;
        font-weight: 600;
    `,
    Header2: styled.h2`
        font-size: 2.5rem;
        font-weight: 600;
    `,
    Header1: styled.h1`
        font-size: 3rem;
        font-weight: 600;
    `,
};

export const PageContainer=styled.div`
    padding-top: 10rem;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const NavBar=styled.ul`
    display: flex;
    flex-direction: ${props => (props.theme.flexDirection ? props.theme.flexDirection : 'column')};
    align-items: ${props => (props.theme.alignItems ? props.theme.alignItems : 'flex-start')};
`;