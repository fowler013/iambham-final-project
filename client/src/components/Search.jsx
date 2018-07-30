import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
}

gogetdata() {
  let str = '?ingredient=chicken&health=alcohol-free,peanut-free&diet=lactose-free';

  function queryStringToJSON(str) {
    if (str.charAt(0) === '?') {
      str = str.slice(1);
    }

    let pairsArray = str.split('&');

    let obj = pairsArray.reduce((acc, curr) => {
      let [key, value] = curr.split('=');

      if (!value || !key) {
        return acc;
      }


      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      acc[key] = value;

      return acc;
    }, {});

    return JSON.stringify(obj);
  }
}



  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
      </React.Fragment>
    );
  }
}

export default Search;
