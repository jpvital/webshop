import { LambdaService } from './lambda.service';

export class StripeService {
    private apiService: LambdaService = new LambdaService();
    
    getProducts() {
        return this.apiService.getStripeProducts();
    }
}