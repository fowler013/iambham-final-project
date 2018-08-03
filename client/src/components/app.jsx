import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Recipe from './Recipe';
import User from './User';
import Navigation from './test1';
import NotFound from './NotFound';
import Reviews from './Reviews';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navigation />
                    <div style={{height: "4.666em"}}></div>
                    <Switch>
                        <Route path="/search/" component={Search} />
                        <Route path="/recipe/:id" component={Recipe} />
                        <Route path="/user/:id" component={User} />
                        <Route exact path="/" component={Home} />
                        <Route exact path= "/" component ={Reviews} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Fragment>
            </Router>

        );
    }
}

export default App;