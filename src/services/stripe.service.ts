import { LambdaApi } from '../apis/lambda.api';

export class StripeService {
    private apiService: LambdaApi = new LambdaApi();
    
    getProducts() {
        return this.apiService.getStripeProducts();
    }
}