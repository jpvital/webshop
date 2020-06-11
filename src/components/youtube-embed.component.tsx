import React from 'react';
import YouTube from 'react-youtube';

type YoutubeEmbedProps = {
    videoId: string,
}

export class YoutubeEmbed extends React.Component <YoutubeEmbedProps, {}> {
  render() {
    const opts: any = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
 
    return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}