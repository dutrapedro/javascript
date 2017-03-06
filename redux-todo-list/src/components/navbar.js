import React from 'react';
import FilterLink from '../containers/filter-link'

const Navbar = ( { active, children, onClick } ) => (
    <nav className="navbar navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#home">To Do App</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <FilterLink filter='SHOW_ALL'>All</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;