import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageid: "0",
      recipe: []
    };
  }

  setdata() {
    let recipeid = this.props.location.pathname.slice(8);
    console.log(recipeid)
    if (recipeid !== this.state.pageid) {
      this.gogetdata(recipeid);
    }
  }

  gogetdata(sending) {
    fetch(`/api/search/${sending}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          pageid: this.props.location.pathname.slice(8),
          recipe: data[0]
        });
      });
  }

  render() {
    this.setdata()
    console.log(this.state.recipe.image)
    return (
      <React.Fragment>
        <div><div className="card-img-top" style={{ height: "30rem", width: "40rem", backgroundImage: `url(${this.state.recipe.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div></div>
      </React.Fragment>
    );
  }
}

export default Recipe;