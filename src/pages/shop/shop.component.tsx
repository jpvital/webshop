import React from 'react';
import { StripeService } from '../../apis/stripe.service';
import { productList } from '../../components/product-list.component';

type ShopState = {
    products: any,
}

export class Shop extends React.Component<{}, ShopState>{
    private stripeService: StripeService;

    constructor(props: any){
        super(props);
        this.stripeService = new StripeService();
        this.state = { products: [] };
    }

    async componentDidMount(){
        const products = await this.stripeService.getProducts();
        this.setState({ products });
    }

    render(){
        return productList(this.state.products)
    }
};