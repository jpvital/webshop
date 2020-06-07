import axios from 'axios';

export class YoutubeService {
    private apiKey: string | undefined;
    private channelId: string | undefined;
    private apiUrl: string | undefined;
    
    constructor() {
        this.apiKey = process.env.REACT_APP_YT_API_KEY;
        this.channelId = process.env.REACT_APP_YT_CHANNEL_ID;
        this.apiUrl = process.env.REACT_APP_YT_API_HOST;
    }

    async getLatestVideos() {
        const youtubeApiSearchUrl: string = `${this.apiUrl}/search`;
        const searchArgs: object = {
            part: 'snippet',
            channelId: this.channelId,
            maxResults: 3,
            order: 'date',
            type: 'video',
            key: this.apiKey,
        }
        const latestVideosMeta = await axios.get(youtubeApiSearchUrl, { params: searchArgs });
        return latestVideosMeta.data.items.map((i: any) => i.id.videoId);
    }
}