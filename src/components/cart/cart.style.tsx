import styled from 'styled-components';

export const CartItemImage = styled.div`
    display: flex;
    padding-right: 2rem;
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
`;

export const CartItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const CartItemQuantityCounter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CartItemPrice = styled.div`
    font-weight: 500;
    display: flex;
    width: 1rem;
    flex-direction: column;
    align-items: flex-end;
`;