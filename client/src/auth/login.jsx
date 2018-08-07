import React, { Component, Fragment } from 'react';
import * as userService from '../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../components/utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true,
            form: {
                email: "",
                firstname: "",
                lastname: "",
                password: "",
                username: ""
              }
        };
    }

    componentDidMount() {
        userService.checkLogin()
        .then((loggedIn) => {
            if (loggedIn) {
                this.setState({ redirectToReferrer: true, checkingLogin: false });
            } else {
                this.setState({ checkingLogin: false });
            }
        });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }

    handleFormSignUpSubmit() {
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
      handleFormFirstNameChange(firstname) {
        let form = Object.assign({}, this.state.form, { firstname });
        this.setState({ form });
      }
      handleFormLastNameChange(lastname) {
        let form = Object.assign({}, this.state.form, { lastname });
        this.setState({ form });
      }
      handleFormEmailChange(email) {
        let form = Object.assign({}, this.state.form, { email });
        this.setState({ form });
      }
      handleFormUsernameChange(username) {
        let form = Object.assign({}, this.state.form, { username });
        this.setState({ form });
      }
      handleFormPasswordChange(password) {
        let form = Object.assign({}, this.state.form, { password });
        this.setState({ form });
      }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
       const { from } = this.props.location.state || { from: { pathname: '/' } };
       const { redirectToReferrer, checkingLogin } = this.state;

       if (checkingLogin) {
           return <IndeterminateProgress message="Checking Login Status..." />;
       }
       if (redirectToReferrer) {
           return (
               <Redirect to={from} />
           );
       }

       return (
<Fragment>

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Log In</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><form className="form-signin" style={{maxWidth: '330px', margin: "auto", width: "100%"}} onSubmit={(e) => this.login(e)}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus="" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"  onChange={(e) => this.handlePasswordChange(e.target.value)} required /> 
                    <label>
        </label>{this.state.feedbackMessage ? (
                        <p>{ this.state.feedbackMessage }</p>
                    ): null}
                    <input type="submit" value="Login" className="btn btn-lg btn-primary btn-block" />
                </form>
</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="signup-page-container"
        style={{backgroundColor: "aqua"}}>
          <div
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="card">
              <div className="card-body" style={{ width: "40rem" }}>
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
                        this.handleFormFirstNameChange(e.target.value);
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
                        this.handleFormLastNameChange(e.target.value);
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
                        this.handleFormEmailChange(e.target.value);
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
                    <i className="fa fa-user prefix grey-text" />
                    <input
                      type="text"
                      id="materialFormCardConfirmEx"
                      className="form-control"
                      onChange={e => {
                        this.handleFormUsernameChange(e.target.value);
                      }}
                      name="email"
                    />

                    <label
                      htmlFor="materialFormCardConfirmEx"
                      className="font-weight-light"
                    >
                      Your username
                    </label>
                  </div>

                  <div className="md-form">
                    <i className="fa fa-lock prefix grey-text" />
                    <input
                      type="password"
                      id="materialFormCardPasswordEx"
                      className="form-control"
                      onChange={e => {
                        this.handleFormPasswordChange(e.target.value);
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
                        this.handleFormSignUpSubmit();
                      }}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></div>
</div>
                
            </Fragment>
       );
    }
}

export default Login; 