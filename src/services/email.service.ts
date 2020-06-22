import { LambdaService } from "./lambda.service";

export default class EmailService {
    private apiService = new LambdaService();
    accountCreated(email: string) {
        return this.apiService.emailAccountCreated({ email });
    }
}