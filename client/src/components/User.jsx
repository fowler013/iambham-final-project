import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      user: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.updateUser = this.updateUser.bind(this);
  };


  handleFirstNameChange(e) {

    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {

    this.setState({ email: e.target.value });
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value })
  }



  componentDidMount() {
    this.getUser();
  }



  getUser() {
    fetch(`/api/user/${this.props.match.params.id}`)
      .then((res) => {
        return res.json()
      }).then((user) => {
        console.log(user)
        this.setState({
          user: user
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  updateUser() {
    let sending = {}

    let updatefirstname = this.state.firstName
    let updatelastname = this.state.lastName
    let updateemail = this.state.email
    let updateusername = this.state.userName

    if (updatefirstname !== "") {
      sending.firstname = updatefirstname
    }
    if (updatelastname !== "") {
      sending.lastname = updatelastname
    }
    if (updateemail !== "") {
      sending.email = updateemail
    }
    if (updateusername !== "") {
      sending.username = updateusername
    }

    console.log(sending)
    fetch(`/api/user/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sending)
    })
      .then((res) => res.json())
this.setState({
  
})
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    console.log('user state', this.state.user)
    console.log(this.props)
    let post = this.state.user;

    return (
      <React.Fragment>
        <div className="d-flex flex-row">
          <form className="card p-3 formContainer bg-light" style={{ marginTop: '3rem', width: '40rem', height: '37rem' }}>
            <label
              htmlFor="title-input"
              className="d-block m-1 text-dark cardFont">{this.props.action}
            </label>
            <div className="" style={{ background: "#fc724c" }}>
              <p className="h4 text-center py-4">Info</p>
            </div>


            <div className="md-form">
              <i className=" prefix dark-text" style={{ margin: "inherit", position: "inherit" }}></i>
              <input value={this.state.userName}
                onChange={this.handleUserNameChange}
                className="form-control w-5 m-1 d-inline text formAuthor cardFont"
                placeholder="username" style={{ backgroundColor: "white" }} />
              <label htmlFor="title-input" className="font-weight-light"></label>
            </div>


            <div className="md-form">
              <i className=" prefix dark-text" style={{ margin: "inherit", position: "inherit" }}></i>
              <input value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                className="form-control w-5 m-1 d-inline text formAuthor cardFont"
                placeholder="first name" style={{ backgroundColor: "white" }} />
              <label htmlFor="title-input" className="font-weight-light"></label>
            </div>


            <div className="md-form">
              <i className=" prefix dark-text" style={{ margin: "inherit", position: "inherit" }}></i>
              <input value={this.state.lastName}
                onChange={this.handleLastNameChange}
                className="form-control w-5 m-1 d-inline text formAuthor cardFont"
                placeholder="last name" style={{ backgroundColor: "white" }} />
              <label htmlFor="title-input" className="font-weight-light"></label>
            </div>


            <div className="md-form">
              <i className=" prefix dark-text" style={{ margin: "inherit", position: "inherit" }}></i>
              <input value={this.state.email}
                onChange={this.handleEmailChange}
                className="form-control w-5 m-1 d-inline text formAuthor cardFont"
                placeholder="email" style={{ backgroundColor: "white" }} />
              <label htmlFor="title-input" className="font-weight-light"></label>
            </div>

            <div className="text-center py-4 mt-3">
              <button onClick={() => { this.updateUser(post) }}
                type="button"
                className="btn btn-dark btn-sm text-secondary m-2 cardFont">update!</button>
            </div>
          </form>

          {/*  NEED TO DOUBLE CHECK THE CLASSNAME CARD!!! */}
          <div className="card p-3 m-4" style={{ marginTop: '3rem', width: '28rem', height: "42rem" }}>
            <img className="card-img-top" src="https://www.mautic.org/media/images/default_avatar.png" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{post.firstname}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{post.lastname}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{post.email}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{post.username}</p>
            </div>
          </div>
          {/* this is the reviews section */}
          <div className="card card-cascade wider" style={{ marginTop: '3rem', width: '24rem', height: "30rem" }}>

            {/* <!-- Card image --> */}
            <div className="view view-cascade gradient-card-header peach-gradient" style={{ backgroundColor: "#fc724c" }}>

              {/* <!-- Title --> */}
              <h2 className="card-header-title mb-3">Reviews</h2>
              {/* <!-- Text --> */}
              <p className="mb-0"><i className="fa fa-calendar mr-2"></i>26.07.2017</p>

            </div>

            {/* <!-- Card content --> */}
            <div className="card-body card-body-cascade text-center">

              {/* <!-- Text --> */}
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex minis recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</p>
              {/* <!-- Link --> */}
              <a href="#!" className="orange-text d-flex flex-row-reverse p-2">
                <h5 className="waves-effect waves-light">Read more<i className="fa fa-angle-double-right ml-2"></i></h5>
              </a>

            </div>


          </div>

        </div>


      </React.Fragment>
    );
  }
}

<div className="card">


  <div className="card-body">





  </div>


</div>

{/* <form className="card p-3 formContainer bg-dark" style={{ marginTop: '5rem', width: '20rem', height: '20rem' }}>
          <label
            htmlFor="title-input"
            className="d-block m-1 text-light cardFont">{this.props.action} post:
                </label>
          <input
            value={this.state.userName}
            onChange={this.handleUserNameChange}
            className="form-control w-5 m-1 d-inline text formAuthor cardFont"
            placeholder="username"
          />
          <input
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            className="form-control w-5 m-1 d-inline text formAuthor cardFont"
            placeholder="first name"
          />
          <input
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            className="form-control w-70 m-1 d-inline formTitle cardFont"
            placeholder="last name"
          />
          <div className="form-group">
            <input value={this.state.email}
              onChange={this.handleEmailChange}
              className="form-control w-70 m-1 d-inline bg-light formContent cardFont"
              placeholder="email" />
          </div>

          <button
            onClick={() => { this.updateUser(post) }}
            type="button"
            className="btn btn-light btn-sm text-secondary m-2 cardFont">update!
                </button>
        </form> */}

export default User;