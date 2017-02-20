import React, { Component } from 'react';
import VideoDetailDisplayer from './video-detail-displayer';


class ResultDisplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="result-displayer">
                <VideoDetailDisplayer resultsProps={ this.props.resultsProps } />
            </div>
        );
    }
}

export default ResultDisplayer;