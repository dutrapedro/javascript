import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" onChange={ this.props.onSearchChange } />
                </div>
                <button type="button" className="btn btn-default" onClick={ this.props.onSearchSubmit }>Search</button>
            </form>
        );
    }
}

export default SearchBar;