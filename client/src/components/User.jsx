import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import * as UserService from '../services/users';

class User extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      userContainer: [],
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

  testClear() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      user: ''
    })
  }




  componentDidMount() {
    UserService.read(this.props.match.params.id).then((user) => {
      this.setState({
        userContainer: [user]
      })
    })
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
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   userName: '',
    //   user: ''
    // })
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
        <div className = "user-page-container">
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
              <button
                onClick={() => { this.updateUser(post) }}
                onClick={()=> {this.testClear()}}
                type="button"
                className="btn btn-dark btn-sm text-secondary m-2 cardFont">update!</button>
            </div>
          </form>

          {/*  NEED TO DOUBLE CHECK THE CLASSNAME CARD!!! */}
          {this.state.userContainer.map((user) => {
            return (
              <div className="card p-3 m-4" key = {user.id} style={{ marginTop: '3rem', width: '28rem', height: "42rem" }}>
                <img className="card-img-top" src="https://www.mautic.org/media/images/default_avatar.png" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{user.firstname}</p>
                </div>
                <div className="card-body">
                  <p className="card-text">{user.lastname}</p>
                </div>
                <div className="card-body">
                  <p className="card-text">{user.email}</p>
                </div>
                <div className="card-body">
                  <p className="card-text">{user.username}</p>
                </div>
              </div>
            )
          })}
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

        <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="https://pioneerwoman.files.wordpress.com/2012/08/7771464864_07e1e3d994_z.jpg?w=630&h=419" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" className="btn btn-primary btn-lg">Large button</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://api.norecipes.com/wp-content/uploads/2009/09/fish-veracruz-recipe-pescado-veracruzana.1024x1024.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" className="btn btn-primary btn-lg">Large button</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://d3lawkbdj6aabd.cloudfront.net/singleplatform/image/upload/c_fit/4170f62f828bb389b46f8365a93cf54ec9133be3.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" className="btn btn-primary btn-lg">Large button</button>
    </div>
  </div>
</div>
        </div>
      </React.Fragment>
    );
  }
}

{/* <div className="card">


  <div className="card-body">





  </div>


</div> */}

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