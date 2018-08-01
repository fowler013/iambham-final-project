import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

handleSubmitClick() {
    let keywords = $('#SearchBar').val()
    console.log(keywords)
    window.location.href = `${window.location.origin}/search/keyword=${keywords}`
}

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-item-baseline fixed-top my-0 pb-auto">
                    <div className="nav-bar nav-logo-centered">
                        <div className="nav-bar-container d-flex flex-row mb-0" >
                            {/* <a className="nav-button nav-sidepanel-button" href="/sitemap/" title="Navigation">
                                <span className="icon icon-menu"></span>
                            </a> */}
                            <div className="d-flex align-self-center">
                                <a className="nav-logo " href="/">
                                    <img src="https://freeiconshop.com/wp-content/uploads/edd/eat-flat-1.png" width="60" height="60" className=" d-flex align-self-center" alt="" />
                                </a>
                            </div>

                            <div className="nav-swipeable ">

                                {/* this is the links area   THIS WILL PROBABLY BE CHANGED */}
                                {/* <div className="btn-group p-2" role="group" aria-label="Basic example">
                                  <NavLink to="/search/"><button type="button" className="btn btn-secondary">Diet-Health</button></NavLink> 
                                   <NavLink to = "/recipe/"> <button type="button" className="btn btn-secondary">Recipe</button></NavLink>
                                   <NavLink to = "/"> <button type="button" className="btn btn-secondary">Meals</button></NavLink>
                                </div> */}
                            </div>

                        </div>
                    </div>
                                    
                    <div>
                       
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" id="SearchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={event => {
                                this.handleSubmitClick();
                            }}>Search</button>
                        </form>
                    </div>

                    {/* this is the search the dropdown button */}
                    <div className="dropdown p-1 d-flex">
                        <button className="btn btn-outline-dark dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <NavLink to = "/user"> <button className="btn dropdown-item"   type = "button" href="#">Accounts</button></NavLink>
                            <a className="dropdown-item" href="#">Logout</a>

                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;