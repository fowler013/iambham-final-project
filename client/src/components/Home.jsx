import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
      </React.Fragment>
    );
  }
}

export default Home;