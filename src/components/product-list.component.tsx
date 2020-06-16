import React from 'react';
import styled from 'styled-components';
import { Image, Text, Button, ButtonText } from './generic/generic';
import { store, addToCart } from '../utils/store';
import verbose from '../global/verbose';

type ProductProps = {
    id: string,
    name: string,
    images: string[],
};

const ProductFooter = styled.div``;
const Product=styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--shadow-light);
`;
const product = (props: ProductProps) => (
    <Product key={props.id}>
        <Image src={props.images[0]}/>
        <ProductFooter>
            <Text>{props.name}</Text>
            <Button onClick={() => store.dispatch(addToCart(props))}>
                <ButtonText>{verbose.USER_ACTION.ADD_TO_CART}</ButtonText>
            </Button>
        </ProductFooter>
    </Product>
);  

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const productList = (products: ProductProps[]) => (
    <ProductList>
        {products.map((prod: ProductProps) => product(prod))}
    </ProductList>
);