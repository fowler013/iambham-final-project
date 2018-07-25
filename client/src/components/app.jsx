import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './form';

class App extends Component {

    render() {
        return (
          <Router>
          <Fragment>
          <Navigation />
          <Switch>
              <Route exact path="/" component={Form} />
              <Route path="/search" component={Login} />
              <Route path="/user" component={Logout} />
          </Switch> 
            </Fragment>
          </Router>  
            
        );
    }
}

export default App;