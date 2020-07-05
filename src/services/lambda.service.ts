import axios from 'axios';

export class LambdaService {
    private awsApiHost = 'https://kzajtsttq8.execute-api.eu-west-2.amazonaws.com/Prod';
    private functionUrls = {
        ADD_ORDER: 'add-order',
        GET_YT_FEED: 'youtube-feed',
        GET_STRIPE_PRODUCTS: 'products',
        EMAIL_ACCOUNT_CREATED: 'email-account-created'

    };

    addOrder(payload: any){
        return axios.post(`${this.awsApiHost}/${this.functionUrls.ADD_ORDER}`, payload, {
            headers: {
                'Content-Type':'application/json'
            }
        });
    };

    getYoutubeFeed(){
        return axios.get(`${this.awsApiHost}/${this.functionUrls.GET_YT_FEED}`).then(res => res.data);
    };

    getStripeProducts(){
        return axios.get(`${this.awsApiHost}/${this.functionUrls.GET_STRIPE_PRODUCTS}`).then(res => res.data);
    };

    emailAccountCreated(payload: any){
        return axios.post(`${this.awsApiHost}/${this.functionUrls.EMAIL_ACCOUNT_CREATED}`, payload).then(res => res.data);
    }
}