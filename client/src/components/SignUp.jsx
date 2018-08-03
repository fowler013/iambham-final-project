import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleSignUpSubmit() {
    // POST Users
    let url = "http://localhost:3000/api/user";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleFirstNameChange(firstname) {
    let form = Object.assign({}, this.state.form, { firstname });
    this.setState({ form });
  }
  handleLastNameChange(lastname) {
    let form = Object.assign({}, this.state.form, { lastname });
    this.setState({ form });
  }
  handleEmailChange(email) {
    let form = Object.assign({}, this.state.form, { email });
    this.setState({ form });
  }
  handleUsernameChange(username) {
    let form = Object.assign({}, this.state.form, { username });
    this.setState({ form });
  }
  handlePasswordChange(password) {
    let form = Object.assign({}, this.state.form, { password });
    this.setState({ form });
  }

  render() {
    return (
      <React.Fragment>

                    <div
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
<div className="card">
          <div className="card-body" style={{width: "40rem"}}>
            <form
              className="movie-form"
              action="/"
              method="POST"
              className="movie-form"
            >
              <p className="h4 text-center py-4">Sign up</p>

              <div className="md-form">
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  id="materialFormCardFirstName"
                  className="form-control"
                  onChange={e => {
                    this.handleFirstNameChange(e.target.value);
                  }}
                  name="firstname"
                />
                <label
                  htmlFor="materialFormCardNameEx"
                  className="font-weight-light"
                >
                  First name
                </label>
              </div>
              <div className="md-form">
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  id="materialFormCardLastName"
                  className="form-control"
                  onChange={e => {
                    this.handleLastNameChange(e.target.value);
                  }}
                  name="lastname"
                />
                
                <label
                  htmlFor="materialFormCardNameEx"
                  className="font-weight-light"
                >
                  Last name
                </label>
              </div>

              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="materialFormCardEmailEx"
                  className="form-control"
                  onChange={e => {
                    this.handleEmailChange(e.target.value);
                  }}
                  name="email"
                />
                
                <label
                  htmlFor="materialFormCardEmailEx"
                  className="font-weight-light"
                >
                  Your email
                </label>
              </div>

              <div className="md-form">
                <i className="fa fa-exclamation-triangle prefix grey-text" />
                <input
                  type="email"
                  id="materialFormCardConfirmEx"
                  className="form-control"
                  onChange={e => {
                    this.handleEmailChange(e.target.value);
                  }}
                  name="email"
                />
                
                <label
                  htmlFor="materialFormCardConfirmEx"
                  className="font-weight-light"
                >
                  Confirm your email
                </label>
              </div>

              <div className="md-form">
                <i className="fa fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="materialFormCardPasswordEx"
                  className="form-control"
                  onChange={e => {
                    this.handlePasswordChange(e.target.value);
                  }}
                  name="password"
                />
                
                <label
                  htmlFor="materialFormCardPasswordEx"
                  className="font-weight-light"
                >
                  Your password
                </label>
              </div>

              <div className="text-center py-4 mt-3">
                <button
                  className="btn btn-cyan"
                  type="submit"
                  onClick={() => {
                    this.handleSignUpSubmit();
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
          </div>
        
      </React.Fragment>
    );
  }
}
