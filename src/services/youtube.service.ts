import { LambdaApi } from "../apis/lambda.api";

export class YoutubeService {
    private apiService: LambdaApi = new LambdaApi();

    getLatestVideos() {
        return this.apiService.getYoutubeFeed();
    }
}