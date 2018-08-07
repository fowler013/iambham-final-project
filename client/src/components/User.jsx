import React,{ Fragment } from "react";
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



  getUser() {
    LoginService.me().then((x) => {
      console.log(x)
    }).catch((err) => {
      console.error(err);
    })
    // fetch(`/api/user/${this.props.match.params.id}`)
    //   .then((res) => {
    //     return res.json()
    //   }).then((user) => {
    //     console.log(user)
    //     this.setState({
    //       user: user
    //     });
    //   }).catch((err) => {
    //     console.log(err);
    //   });
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

    console.log(sending);
    console.log(this.props.match.params.id)
    UserService.update(this.props.match.params.id, sending).catch((err) => {
      console.error(err);
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



  render() {
    console.log('user state', this.state.user)
    console.log(this.props)
    let post = this.state.user;

    let form = this.state.userContainer.map((user) => {
      return (
          <form className="my-3">
            
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
                className="btn btn-dark btn-sm text-secondary m-2 cardFont">update!</button>
            </div>
          </form>
        // <div className="card p-3 m-4 text-center" key={user.id} style={{ marginTop: '3rem', width: '28rem', height: "28rem" }}>

        // </div>
      )

    })
    return(
      <Fragment>
        {form}
      </Fragment>
    )
  }
  }


export default User;