import React, { Component } from 'react';
import YouTube from 'react-youtube';
import VideoDetailDisplayer from './video-detail-displayer';

class VideoPlayerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: this._handleVideoList(this)
        };

    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters 
                autoplay: 1
            }
        };

        return (
            <div className="video-player">
                <YouTube
                    videoId={ this.props.playerInfo.videoId }
                    opts={opts}
                    onReady={this._onReady}
                />
                 <h4> { this.props.playerInfo.title } </h4>
                 <p> { this.props.playerInfo.description } </p>
                 <VideoDetailDisplayer resultsProps={ this.state.videoList } onVideoSelected={ this.props.onVideoSelected }/>
            </div>
        );
    }

    _handleVideoList(self) {
        let list = this.props.videoList;
        let videoId = this.props.playerInfo.videoId;
        list =  list.filter( (element) => element.videoId !== videoId);
        return list.slice(0, 20);
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}

export default VideoPlayerContainer;