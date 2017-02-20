import React, { Component } from 'react';

class VideoDetailDisplayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const details = this.props.resultsProps.map( result =>
                            <div key={ result.thumbnailSrc } className="video-detail-displayer">
                                <img src={ result.thumbnailSrc } width={320} height={180} />
                                <h3>{ result.title }</h3>
                            </div>       
                        );
        return (
            <div className="video-detail-container">{ details }</div>
        );
    }
}

export default VideoDetailDisplayer;