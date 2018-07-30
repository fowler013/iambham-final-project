import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-item-baseline">
                    <div className="nav-bar nav-logo-centered">
                        <div className="nav-bar-container d-flex flex-row mb-3" >
                            <a className="nav-button nav-sidepanel-button" href="/sitemap/" title="Navigation">
                                <span className="icon icon-menu"></span>
                            </a>

                            <a className="nav-logo" href="/">




                                


                            </a>

                            <div className="nav-swipeable ">

                                        {/* this is the links area   THIS WILL PROBABLY BE CHANGED */}
                                <div className="nav-swipeable-inner d-flex flex-row">
                                    <div className="nav-item p-3 btn-outline-primary"role="button" data-id="1"><a href="/weeknight-dinners/">Diet-Health</a></div>
                                    <div className="nav-item p-3" data-id="2"><a href="/best-cocktail-recipes/">Meal</a></div>
                                    <div className="nav-item p-3" data-id="3"><a href="/bbq-recipes/">Ingredients</a></div>
                                    {/* <div className="nav-item p-3" data-id="4"><a href="/easy-kid-recipes/">Delish Kids</a></div>
                                    <div className="nav-item p-3" data-id="5"><a href="/food/a21528841/delish-eat-like-every-days-the-weekend-cookbook/">Cookbook</a></div> */}
                                  




                                    
                                </div>
                            </div>
                            <a className="nav-button nav-search-button" href="/search/" title="Search">
                                <span className="icon icon-search"></span>
                            </a>

                        </div>
                    </div>
                                            {/* this is the search bar */}
                    <div> 
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                    
                                        {/* this is the search the dropdown button */}
                    <div className="dropdown p-1 d-flex">
                        <button className="btn btn-outline-dark dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Accounts</a>
                            <a className="dropdown-item" href="#">Logout</a>

                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;