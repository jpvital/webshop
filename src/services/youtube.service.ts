import { LambdaService } from "./lambda.service";

export class YoutubeService {
    private apiService: LambdaService = new LambdaService();

    getLatestVideos() {
        return this.apiService.getYoutubeFeed();
    }
}