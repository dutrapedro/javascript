import search from 'youtube-simple-search';
 
var options = {
  key: 'AIzaSyBwQGA0zO3L_zhz3x18zosjkYAtgs8WkY4'
};

const SearchVideo = {
    search: (searchTerm, maxResults, callback) => {
        options.query = searchTerm;
        options.maxResults = maxResults;
        search( options, (response) => {
            callback(response);
        });
    }
}

export default SearchVideo;