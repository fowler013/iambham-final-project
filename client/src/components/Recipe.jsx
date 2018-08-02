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
    return (
      <React.Fragment>
<div className="container mt-3">
  <div className="card card-cascade wider reverse">


  <div className="view overlay">
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"/>
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
  </div>

  <div className="card-body card-body-cascade text-center">


    <h4 className="card-title"><strong>My adventure</strong></h4>

    <h6 className="font-weight-bold indigo-text py-2">Photography</h6>

    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam.
    </p>


              </div>

            </div></div>
            
      </React.Fragment>
    );
  }
}

export default Recipe;