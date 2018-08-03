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

    keycheck(event) {
        console.log('got here')
        if (event.charCode === 13) {
            console.log('key pressed')
            this.handleSubmitClick()

        }

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
                    <div className="form-inline mr-auto">
                        <div className=" my-0">
                        <i className="fa fa-search text-dark ml-2" aria-hidden="true" onClick={event => {
                                this.handleSubmitClick();
                            }}></i>
                            {/* <input className="form-control"  type="text" id="SearchBar" placeholder="Search" aria-label="Search"onKeyPress={event => {this.keycheck(event)} }  /> */}
                            <input className="form-control ml-sm-3 rounded-left" style = {{ width: "350px"}} type="text" id="SearchBar" placeholder="Search" aria-label="Search" onKeyPress={event => {this.keycheck(event)}}/>
                        </div>
                    </div>
                    {/* <div>
                       
                        <div className="form-inline my-2 my-lg-0" onSubmit={event => {
                            this.handleSubmitClick();
                        }}>
                            <input className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search" onKeyPress={event => {this.keycheck(event)} }/>
                            <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={event => {
                                this.handleSubmitClick();
                            }}>Search</button>
                        </div>
                    </div> */}

                    {/* this is the search the dropdown button */}
                    <div className="dropdown p-1 d-flex">
                        <button className="btn  dropdown-toggle " type="button" id="dropdownMenuButton" style={{backgroundColor: "#fc714c"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <NavLink to="/user"> <button className="dropdown-item text-dark"  type="button" href="#">Accounts</button></NavLink>
                            <a className="dropdown-item text-dark" href="#">Favorites</a>
                            <a className="dropdown-item text-dark" href="#">History</a>
                            <a className="dropdown-item text-dark" href="http://localhost:3000/signup">Logout</a>

                        </div>
                    </div>

                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;

