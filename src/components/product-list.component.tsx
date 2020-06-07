import React from 'react';
import styled from 'styled-components';
import { Image, Text, Button } from './generic/generic';
import { store, addToCart } from "../store";

type ProductProps = {
    id: string,
    name: string,
    images: string[],
}

const ProductFooter = styled.div``;
const Product=styled.div``;
const product = (props: ProductProps) => (
    <Product key={props.id}>
        <Image src={props.images[0]}/>
        <ProductFooter>
            <Text style={{width: '100%', textAlign: 'center'}}>{props.name}</Text>
            <Button onClick={() => store.dispatch(addToCart(props))}><Text>add to cart</Text></Button>
        </ProductFooter>
    </Product>
);  

const ProductList = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    display: grid;
    gap: 20px;
`;
export const productList = (products: ProductProps[]) => (
    <ProductList>
        {products.map((prod: ProductProps) => product(prod))}
    </ProductList>
);