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
import Pagination from "./SearchPagination"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageid: "0",
      keyword: "",
      hits: "",
      searchlist: [],
      from: "0",
      to: "20"
    };
  }

  setdata() {
    let search = this.props.match.params.id;
    if (search !== this.state.pageid) {
      this.gogetdata(search);
    }
  }

  gogetdata(sending) {
    fetch(`/api/search/?${sending}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          pageid: this.props.match.params.id,
          keyword: data.q,
          hits: data.count,
          searchlist: data.hits,
          from: data.from,
          to: data.to
        });
      });
  }

  toNumberString(element) {
    let newstring = [];
    newstring = element.toString().split("");
    if (newstring.length >= 7) {
      newstring.splice(-3, 0, ",");
      newstring.splice(-7, 0, ",");
    }
    if (4 <= newstring.length && newstring.length <= 6) {
      newstring.splice(-3, 0, ",");
    }
    newstring = newstring.join("");
    return newstring;
  }

  render() {
    this.setdata();

    return (
      <React.Fragment>
        <div style={{ marginLeft: "3rem", marginRight: "3rem" }}>
          <div className="card my-3">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>Keywords: {this.state.keyword}</div>
              <div>
                {this.toNumberString(this.state.hits) || 0} Total Recipes
              </div>
            </div>
          </div>

          <div className="row">
            {this.state.searchlist.map(element => {
              return SearchTabs(element);
            })}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            {Pagination({
              total: +this.state.hits,
              start: +this.state.from,
              end: +this.state.to
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
