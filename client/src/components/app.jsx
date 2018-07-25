import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './form';
import Navigation from './Navigation';
import NotFound from './NotFoound';

class App extends Component {

    render() {
        return (
          <Router>
          <Fragment>
          <Navigation />
          <Switch>
              <Route exact path="/" component={Form} />
              <Route path='*' component={NotFound} />
          </Switch> 
            </Fragment>
          </Router>  
            
        );
    }
}

export default App;