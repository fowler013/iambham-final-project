import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './form';

class App extends Component {

    render() {
        return (
          <div>
            <h1>hello world</h1>
            <Form />
          </div>
           
            
            
        );
    }
}

export default App;