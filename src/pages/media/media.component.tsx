import React from 'react';
import { YoutubeService } from '../../apis/youtube.service';
import { YoutubeEmbed } from '../../components/youtube.component';

type MediaState = {
    youtubeFeed: any
}

export class Media extends React.Component<{}, MediaState> {
    private youtubeService: YoutubeService;
    
    constructor(props: any) {
        super(props);
        const script = document.createElement("script");
        
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        this.state = { youtubeFeed: [] };
        this.youtubeService = new YoutubeService();
    }

    async componentDidMount(){
        const youtubeFeed = await this.youtubeService.getLatestVideos();
        this.setState({ youtubeFeed });
    }

    render() {
        const youtubeContainer = <div>{
            this.state.youtubeFeed.length ? this.state.youtubeFeed.map((videoId: string) => <YoutubeEmbed key={videoId} videoId={videoId}/>) : 'No videos'}</div>;
        return <div>
                    Media
                    {youtubeContainer}
                    <a
                        className="twitter-timeline" data-width="300"
                        data-height="400" data-theme="dark" href="https://twitter.com/ApiJoao?ref_src=twsrc%5Etfw">
                        A Twitter List by Joao Campos
                    </a>
                </div>;
        
    }
}