import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Recipe from './Recipe';
import User from './User';
import Navigation from './Navigation';
import NotFound from './NotFound';
import Reviews from './Reviews';
import SignUp from './signup';
import UserStorage from './UserStorage';
import Login from '../auth/login';
import Logout from '../auth/logout';
import PrivateRoute from '../auth/privateRoute';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navigation />
                    <div style={{ height: '4.666em' }} />
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route path="/search/:id" component={Search} />
                        <Route path="/recipe/:id" component={Recipe} />
                        <Route path="/user/:id" component={User} />
                        <Route path="/storage" component={UserStorage} />
                        <Route exact path="/" component={Home} />
                        {/*<Route exact path="/" component={Reviews} />*/}
                        {/*<Route path="*" component={NotFound} />*/}
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;
