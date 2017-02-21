import React, { Component } from 'react';
import Navbar from './navbar';
import SearchVideo from '../utils/search-videos';
import ResultDisplayer from './results-displayer';
import VideoPlayerContainer from './video-player-container';
const DEFAULT_SEARCH_TERM = 'parafernalha';
const DEFAULT_MAX_RESULTS = 50;
const videoList = [];
const searchProps = {
    term: DEFAULT_SEARCH_TERM,
    maxResults: DEFAULT_MAX_RESULTS
}

function filterResults(results) {
    return results.map( res => {
                return {
                    thumbnailSrc: res.snippet.thumbnails.medium.url,
                    title: res.snippet.title,
                    videoId: res.id.videoId,
                    description: res.snippet.description
                }
            });
}

class Container extends Component {
    constructor(props) {
        super(props);
         this.state = { videoList: videoList, searchProps: searchProps, showList: false, playerInfo: {} };
         this._handleSearchTermChange = this._handleSearchTermChange.bind(this);
         this._showSearchResults = this._showSearchResults.bind(this);
         this._onVideoSelected = this._onVideoSelected.bind(this);
         this._onBrandClick = this._onBrandClick.bind(this);
         this._showSearchResults();
    }

    render() {
        return (
            <div className='container'>
                <Navbar onSearchChange={ this._handleSearchTermChange } onSearchSubmit={ this._showSearchResults } onBrandClick={ this._onBrandClick } />
                { this.state.showList ? <ResultDisplayer 
                                            resultsProps={ this.state.videoList } 
                                            onVideoSelected={ this._onVideoSelected } /> : <VideoPlayerContainer 
                                                                                                playerInfo={ this.state.playerInfo }
                                                                                                videoList={ this.state.videoList }
                                                                                                onVideoSelected={ this._onVideoSelected } /> }
                                                                                                
            </div>
        );
    }

    _handleSearchTermChange(event) {
        this.state.searchProps.term = event.target.value;
        this.setState({ searchProps: this.state.searchProps });
    }

    _showSearchResults() {
        SearchVideo.search(this.state.searchProps.term, this.state.searchProps.maxResults, ( response ) => {
            let results = filterResults(response);
            this.setState({
                videoList: results,
                showList: true
            });
        })
    }

    _onVideoSelected(result) {
        this.state.showList = false;
        this.state.playerInfo = result;
        this.setState(this.state);

    }

    _onBrandClick() {
        this.state.showList = true;
        this.setState(this.state);
    }
}

export default Container;

