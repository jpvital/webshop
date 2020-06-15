import React from 'react';
import { StripeService } from '../../services/stripe.service';
import { productList } from '../../components/product-list.component';
import { PageContainer } from '../../components/generic/generic';

type ShopState = {
    products: any,
}

export class Shop extends React.Component<{}, ShopState>{
    private stripeService: StripeService;

    constructor(props: any){
        super(props);
        this.state = { products: [] };
        this.stripeService = new StripeService();
    }

    async componentDidMount(){
        const products = await this.stripeService.getProducts();
        this.setState({ products });
    }

    render(){
        return <PageContainer style={{flex:1}}>{productList(this.state.products)}</PageContainer>
    }
};