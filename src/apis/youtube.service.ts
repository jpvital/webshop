import { LambdaService } from "./lambda.service";

export class YoutubeService {
    private apiService: LambdaService = new LambdaService();

    async getLatestVideos() {
        const videos = await this.apiService.getYoutubeFeed();
        return videos;
    }
}