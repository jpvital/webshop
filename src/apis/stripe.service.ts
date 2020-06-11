import { LambdaService } from './lambda.service';

export class StripeService {
    private apiService = new LambdaService();
    
    getProducts() {
        return this.apiService.getStripeProducts();
    }
}