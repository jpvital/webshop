import axios from 'axios';

export class LambdaService {
    private lambdaHost = 'https://88r83xogh7.execute-api.eu-west-2.amazonaws.com/Dev';
    private functionUrls = {
        ADD_ORDER: 'add-order',
        GET_YT_FEED: 'get-youtube-feed',
        GET_STRIPE_PRODUCTS: 'get-products',
        EMAIL_ACCOUNT_CREATED: 'email-account-created'

    };

    addOrder(payload: any){
        return axios.post(`${this.lambdaHost}/${this.functionUrls.ADD_ORDER}`, payload);
    };

    getYoutubeFeed(){
        return axios.get(`${this.lambdaHost}/${this.functionUrls.GET_YT_FEED}`).then(res => res.data);
    };

    getStripeProducts(){
        return axios.get(`${this.lambdaHost}/${this.functionUrls.GET_STRIPE_PRODUCTS}`).then(res => res.data);
    };

    emailAccountCreated(payload: any){
        return axios.post(`${this.lambdaHost}/${this.functionUrls.EMAIL_ACCOUNT_CREATED}`, payload).then(res => res.data);
    }
}