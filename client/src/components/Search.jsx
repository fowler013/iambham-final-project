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
import Pagination from "./SearchPagination";
import * as SearchServices from '../services/search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageid: "0",
      keyword: "",
      hits: "",
      searchlist: [],
      from: "0",
      to: "20",
      health: [],
      diet: [],
      calories: ""
    };
  }

  setdata() {
    let search = this.props.match.params.id;
    if (search !== this.state.pageid) {
      this.gogetdata(search);
    }
  }

  gogetdata(sending) {
    SearchServices.readSearch(sending)
      .then((data) => {
        this.setState({
          pageid: this.props.match.params.id,
          keyword: data.q,
          hits: data.count,
          searchlist: data.hits,
          from: data.from,
          to: data.to,
          health: data.params.health,
          diet: data.params.diet,
          calories: data.params.calories
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

setTitle() {
  if (this.state.keyword  !== "") {
    return (<div>Keywords: {this.state.keyword}</div>)
  }
  if (this.state.health) {
  return (
  <div> 
      {this.state.health.map(element => {
        return (element.split('-').map(word => {
          let firstletter = word.slice(0, 1)
          word = `${firstletter.toUpperCase()}${word.slice(1)}`
          return word
        }).join(" "))
      })} Recipes
  </div>
  )
  }
  if (this.state.diet) {
    return (
      <div>
        {this.state.diet.map(element => {
          return (element.split('-').map(word => {
            let firstletter = word.slice(0, 1)
            word = `${firstletter.toUpperCase()}${word.slice(1)}`
            return word
          }).join(" "))
        })} Recipes
      </div>
    )
  }
  return(<div>All Recipes</div>)
}

  render() {
    this.setdata();
    console.log(this.state.searchlist)

    return (
      <React.Fragment>
        <div style={{ marginLeft: "3rem", marginRight: "3rem" }}>
          <div className="card my-5">
            <div className="card-body d-flex align-items-center justify-content-between">
{this.setTitle()}
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
