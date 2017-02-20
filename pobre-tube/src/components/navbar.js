import React, { Component } from 'react';
import SearchBar from './search-bar';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">PobreTube</a>
                    <SearchBar 
                            classNameName='input-field inline' 
                            onSearchChange={ this.props.onSearchChange }
                            onSearchSubmit={ this.props.onSearchSubmit } />
                </div>
            </nav>
        );
    }
}

export default Navbar;