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
    console.log(recipeid);
    if (recipeid !== this.state.pageid) {
      this.gogetdata(recipeid);
    }
  }

  gogetdata(sending) {
    fetch(`/api/search/${sending}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
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
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="card card-cascade wider reverse">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Card image cap"
              />
            </div>

            <div className="card-body text-center">
              <h4 className="card-title">
                <strong>My adventure</strong>
              </h4>

              <h6 className="font-weight-bold indigo-text py-2">Photography</h6>
            </div>
          </div>

          <div class="card my-3">
            <div class="card-body">This is some text within a panel body.</div>
          </div>

          <div className="row my-3">

            <div className="col">
<div class="card">
    <h3 class="card-header primary-color white-text">Featured</h3>
    <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a class="btn btn-primary ">Go somewhere</a>
    </div>
</div>
            </div>
            <div className="col">
            <div class="card">
    <h3 class="card-header primary-color white-text">Featured</h3>
    <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a class="btn btn-primary">Go somewhere</a>
    </div>
</div>
            </div>
            <div className="col">
            <div class="card">
    <h3 class="card-header primary-color white-text">Featured</h3>
    <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a class="btn btn-primary">Go somewhere</a>
    </div>
</div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Recipe;
