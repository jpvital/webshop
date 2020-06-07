import axios from 'axios';

export class StripeService {
    // private apiKey: string | undefined;
    private apiSecret: string | undefined;
    private apiUrl: string | undefined;
    
    constructor() {
        // this.apiKey = process.env.REACT_APP_STRIPE_API_KEY_TEST;
        this.apiSecret = process.env.REACT_APP_STRIPE_API_SECRET_TEST;
        this.apiUrl = process.env.REACT_APP_STRIPE_API_HOST;
    }

    async getProducts() {
        const stripeApiProductsUrl: string = `${this.apiUrl}/v1/products`;
        const products = await axios.get(stripeApiProductsUrl, { params: { key: this.apiSecret } });
        return products.data.data;
    }

}