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

    async getYoutubeFeed(){
        const response = await axios.get(`${this.lambdaHost}/${this.functionUrls.getYoutubeFeed}`);
        return response.data;
    };

    async getStripeProducts(){
        const response = await axios.get(`${this.lambdaHost}/${this.functionUrls.getStripeProducts}`);
        return response.data;
    };
}