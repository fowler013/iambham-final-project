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
    return <React.Fragment>
        <div className="container mt-3">
          <div className="card" style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", backgroundImage: "url('https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg')" }}>
            <div className="card-body p-0">
              <div className="view overlay">
                <div className="d-flex">
                  <div className="col" style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", height: "40rem", minWidth: "60rem", maxWidth: "100%" }} />
                  <div className="d-flex flex-column justify-content-start">
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i class="far fa-clock" style={{ fontSize: "2rem" }} />
                      <p className="card-text text-white">25 mins</p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i class="fas fa-list-ol" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">
                          20 Ingredients
                        </p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i class="fas fa-cookie-bite" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">500 calories</p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i class="fas fa-users" style={{ fontSize: "2rem" }} />
                      <p className="card-text text-white">4 Servings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card my-3">
            <div className="card-body text-center">
              <h4 className="card-title">
                <strong>Billy Coleman</strong>
              </h4>

              <h6 className="font-weight-bold indigo-text py-2">
                Web developer
              </h6>
            </div>
          </div>

          <div className="card my-3">
            <div className="card-body text-center">
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
              <button type="button" className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
                Large button
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="card-header primary-color white-text">
              Ingredients
            </h3>
            <div className="card-body">
              <p className="card-text">
                With supporting text below as a natural lead-in to
                additional content.
              </p>
            <p className="card-text">
              With supporting text below as a natural lead-in to
              additional content.
              </p>
            <a className="btn btn-outline-primary btn-block">Go somewhere</a>
            </div>
          </div>

          <div className="card my-3">
            <h3 className="card-header primary-color white-text d-flex align-items-center justify-content-between">
              <span>Nutrition</span>
              <button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Click Here to learn More
              </button>
            </h3>
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">
                With supporting text below as a natural lead-in to
                additional content.
              </p>
              <a className="btn btn-outline-primary ">Go somewhere</a>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia
                aute, non cupidatat skateboard dolor brunch. Food truck
                quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee
                nulla assumenda shoreditch et. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-header primary-color white-text">
              Featured
            </h3>
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">
                With supporting text below as a natural lead-in to
                additional content.
              </p>
              <a className="btn btn-outline-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </React.Fragment>;
  }
}

export default Recipe;
