import React, { Component } from 'react';
import Navbar from './navbar';
import SearchVideo from '../utils/search-videos';
import ResultDisplayer from './results-displayer';
const DEFAULT_SEARCH_TERM = 'parafernalha';
const DEFAULT_MAX_RESULTS = 50;
const videoProps = [];
const searchProps = {
    term: DEFAULT_SEARCH_TERM,
    maxResults: DEFAULT_MAX_RESULTS
}

function filterResults(results) {
    return results.map( res => {
                return {
                    thumbnailSrc: res.snippet.thumbnails.medium.url,
                    title: res.snippet.title
                }
            });
}

class Container extends Component {
    constructor(props) {
        super(props);
         this.state = { videoProps: videoProps, searchProps: searchProps};
         this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
         this.showSearchResults = this.showSearchResults.bind(this);
    }

    handleSearchTermChange(event) {
        this.setState({ searchProps: { term: event.target.value } });
    }

    showSearchResults(results) {
        SearchVideo.search(this.state.searchProps.term, this.state.searchProps.maxResults, ( response ) => {
            let results = filterResults(response);
            console.log('Teste '+results.length);
            this.setState({
                videoProps: results
            });
        })
    }

    render() {
        return (
            <div className='container'>
                <Navbar onSearchChange={ this.handleSearchTermChange } onSearchSubmit={ this.showSearchResults } />
                { this.state.videoProps.length > 0 ? <ResultDisplayer resultsProps={ this.state.videoProps } /> : null }
            </div>
        );
    }
}

export default Container;

