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
import Form from './form'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageid: '0',
      keyword: '',
      hits: '',
      searchlist: [],
    }
  }

  setdata() {
    let search = this.props.location.pathname.slice(8)
    if (search !== this.state.pageid) {
      this.gogetdata(this.queryStringToJSON(search))
    }
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
        let newstring = []
        data.count.toString().split('').forEach(element => newstring.push(element))
        if (newstring.length >= 7) {
          newstring.splice(-3, 0, ",")
          newstring.splice(-7, 0, ",")
        }
        if (4 <= newstring.length && newstring.length <= 6) {
          newstring.splice(-3, 0, ",")
        }
        newstring = newstring.join('')
        console.log(newstring)

        this.setState({
          pageid: this.props.location.pathname.slice(8),
          keyword: data.q,
          hits: newstring,
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


      if (value.indexOf(",") > -1) {
        acc[key] = value.split(",");
        return acc;
      }

      acc[key] = [value];

      return acc;
    }, {});

    if(!obj.from && !obj.to) {
      obj.from=['0']
      obj.to=['20']
    }
    return JSON.stringify(obj);
  }

  render() {
    this.setdata()

    return <React.Fragment>

        <div style={{ marginLeft: "3rem", marginRight: "3rem" }}>

        <div className="card my-3">
          <div className="card-body">
            This is some text within a panel body.
    </div>
        </div>

          <div className="row">
            {this.state.searchlist.map(element => {
              return SearchTabs(element);
            })}
          </div>
        </div>
      </React.Fragment>;
  }
}

export default Search;
