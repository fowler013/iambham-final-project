import React, { Fragment } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import * as UserService from '../services/users';
import ReviewCard from "./ReviewCard";
import * as ReviewService from '../services/reviews';
import moment from 'moment';
import * as LoginService from '../services/user'
import Login from "../auth/login";

class User extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      userContainer: [],
      reviewContainer: [],
      favoritsContainer: [],

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
    LoginService.me().then((user) => {
      console.log(user);
      let { id } = user;
      return UserService.read(id).then((myUser) => {
        this.setState({
          userContainer: [myUser]
        })
      });
    })
    ReviewService.readByUserid(this.props.match.params.id).then((review) => {
      console.log(review)
      Object.values(review).forEach((review => {
        //console.log(review)
        this.setState({
          reviewContainer: [...this.state.reviewContainer, review]
        })
      }))
    })
  }

  // getUserReview() {
  //   fetch(`/api/reviews/${this.props.match.params.id}`)
  //     .then((res) => {
  //       return res.json()
  //     }).then((review) => {
  //       console.log(review)
  //       this.setState({
  //         review: review
  //       });
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }




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

    console.log(sending);
    console.log(this.props.match.params.id)
    LoginService.me().then((user) => {
      let { id } = user;
      return UserService.update(id, sending).catch((err) => {
        console.error(err);
      })
    })
    //fetch(`/api/user/${this.props.match.params.id}`, {
    //  method: 'PUT',
    //  headers: {
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(sending)
    //})
    //  .then((res) => res.json())
    //  // this.setState({
    //  //   firstName: '',
    //  //   lastName: '',
    //  //   email: '',
    //  //   userName: '',
    //  //   user: ''
    //  // })
    //  .catch((err) => {
    //    console.log(err);
    //  });
  }
  renderFavorites() {

    let container = this.state.userContainer.map((user) => {
      return (
        <div
          id="popular-links1"
          style={{
            paddingBottom: "220px",
            paddingTop: "80px",
            paddingLeft: "220px",
            paddingRight: "220px"
          }}
        >
          <div
            id="link-container-1"
            style={{ marginBottom: "80px", marginTop: "80px" }}
          >
            <div className="row">
              <div className="col">
                <a href="http://localhost:3000/recipe/ffb72e7b53285253a66b46255ce261c8">
                  <div id="homecard" className="card">
                    <div className="overlay">
                      <p className="text center">Favorites</p>
                    </div>
                    <img
                      id="home-image-links"
                      className="card-img-top"
                      src="https://api.norecipes.com/wp-content/uploads/2009/09/fish-veracruz-recipe-pescado-veracruzana.1024x1024.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </a>
              </div>

              <div className="col">
                <a href="http://localhost:3000/recipe/b79327d05b8e5b838ad6cfd9576b30b6">
                  <div id="homecard" className="card">
                    <div className="overlay">
                      <p>Favorites</p>
                    </div>
                    <img
                      id="home-image-links"
                      className="card-img-top"
                      src="https://www.seriouseats.com/recipes/images/2011/12/20111215-dt-chicken-vesuvio-primary.jpg"
                      alt="Card image cap"
                    />
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="http://localhost:3000/recipe/2af7b54fe475a09fd9baea4cf97ad86e">
                  <div id="homecard" className="card">
                    <div className="overlay">
                      <p>Favorites</p>
                    </div>
                    <img
                      id="home-image-links"
                      className="card-img-top"
                      src="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--3621_12.jpg?itok=DMaE2Rdv"
                      alt="Card image cap"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    })

  };


  render() {
    console.log('user state', this.state.user)
    console.log(this.props)
    let post = this.state.user;

    let form = this.state.userContainer.map((user) => {
      return (
        <form className="my-2" key={user.id}>

          <label
            htmlFor="title-input"
            className="d-block m-1 text-dark cardFont">{this.props.action}
          </label>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">First Name</label>
              <input value={this.state.firstName}
                onChange={this.handleFirstNameChange} type="email" className="form-control" id="inputFirstName4" placeholder={user.firstname} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Last Name</label>
              <input value={this.state.lastName}
                onChange={this.handleLastNameChange} type="text" className="form-control" id="inputLastName4" placeholder={user.lastname} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">User Name</label>
            <input value={this.state.userName}
              onChange={this.handleUserNameChange} type="text" className="form-control" id="inputUserName4" placeholder={user.username} />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Email</label>
            <input value={this.state.email}
              onChange={this.handleEmailChange} type="email" className="form-control" id="inputEmail4" placeholder={user.email} />
          </div>

          <div className="text-center py-4 mt-3">
            <button
              onClick={() => { this.updateUser(post) }}
              type="button"
              className="btn btn-sm  m-2 cardFont" style={{ backgroundColor: " rgb(252, 114, 76)" }}>update!</button>
          </div>
        </form>
        // <div className="card p-3 m-4 text-center" key={user.id} style={{ marginTop: '3rem', width: '28rem', height: "28rem" }}>

        // </div>
      )

    })
    return (
      <Fragment>
        <div className="home-page-container">
          {form}
          {container}

        </div>

      </Fragment>
    )
  }
}


export default User;