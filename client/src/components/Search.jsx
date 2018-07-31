import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import SearchTabs from "./Searchtabs";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      hits: '',
      searchlist: [],
    }
  }
  //q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  componentDidMount() {
    let search = this.queryStringToJSON(this.props.location.pathname.slice(8))
this.gogetdata(search)
  }

  gogetdata(sending) {
    fetch('/api/search/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: sending
    }).then
      (res => res.json()).then((data) => {
        console.log(data)
        console.log(data.count)
        console.log(data.count.toString())
        let newstring = [];
        if (data.count >= 1000) {
          data.count.toString().split('').slice(0, -3).forEach(element => newstring.push(element))
          newstring.push(',')
          data.count.toString().split('').slice(-3).forEach(element => newstring.push(element))
          data.count = newstring.join('')
        } else {
          data.count = data.count.toString()
        }

        this.setState({
          keyword: data.q,
          hits: data.count,
          searchlist: data.hits,
        })
      })
  }

  queryStringToJSON(str) {
    if (str.charAt(0) === "?") {
      str = str.slice(1);
    }

    let pairsArray = str.split("&");
    console.log(pairsArray);

    let obj = pairsArray.reduce((acc, curr) => {
      let [key, value] = curr.split("=");

      if (!value || !key) {
        return acc;
      }

      if (value.indexOf(",") > -1) {
        acc[key] = value.split(",");
        return acc;
      }

      acc[key] = [value];

      return acc;
    }, {});

    return JSON.stringify(obj);
  }

  render() {
    console.log(this.state.hits)
    console.log(this.state.keyword)
    console.log(this.state.searchlist)

    return(
      <React.Fragment>
        <div className=" container d-flex justify-content-between">
        <h1>Keywords: {this.state.keyword}</h1>
        <h1>{this.state.hits} Total Recipes</h1>
        </div>
        <div>
        {this.state.searchlist.map(element => {
          return SearchTabs(element)
        })}
        </div>
      </React.Fragment >
    )
  }
}

export default Search;
