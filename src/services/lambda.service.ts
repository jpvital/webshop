import axios from 'axios';

export class LambdaService {
    private lambdaHost = 'https://88r83xogh7.execute-api.eu-west-2.amazonaws.com/Dev';
    private functionUrls = {
        addOrder: 'add-order',
        getYoutubeFeed: 'get-youtube-feed',
        getStripeProducts: 'get-products',
    };

    addOrder(payload: any){
        return axios.post(`${this.lambdaHost}/${this.functionUrls.addOrder}`, payload);
    };

    getYoutubeFeed(){
        return axios.get(`${this.lambdaHost}/${this.functionUrls.getYoutubeFeed}`).then(res => res.data);
    };

    getStripeProducts(){
        return axios.get(`${this.lambdaHost}/${this.functionUrls.getStripeProducts}`).then(res => res.data);
    };
}