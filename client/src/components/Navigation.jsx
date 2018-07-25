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
                <div className=" fixed-top  mt-0 pt-0 pb-3" >
                    <nav className="navbar navbar-light formNav bg-light">
                        <a className="navbar-brand" href="#" className="navbar-brand text-dark">
                            <div class="collapse" id="navbarToggleExternalContent">
                                <div class="bg-dark p-4">
                                    <h5 class="text-white h4">Collapsed content</h5>
                                    <span class="text-muted">Toggleable via the navbar brand.</span>
                                </div>
                            </div>
                        </a> <Link className="navbar-brand text-dark cardFont" to="/">  test </Link>


                        <form className="form-inline ml-auto"><Link to="/about" className="navbar-brand text-dark cardFont" >  Sign in </Link>
                            <div className="md-form my-0">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                        </form>


                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">



                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;