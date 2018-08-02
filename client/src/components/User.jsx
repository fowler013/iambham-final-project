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

  componentDidUpdate(){
    this.updateUser();
  }

  getUser() {
    fetch(`/api/user/${this.props.match.params.id}`)
      .then((res) => {
        return res.json()
      }).then((user) => {
        this.setState({
          user: user
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  updateUser() {
    fetch(`/api/user/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        username: this.state.userName
      })
    })
      .then((res) => res.json())
      // .then(() => {
      //   this.setState({
      //     user: post
      //   });
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
        <div className = "d-flex flex-row">
         <form className= "card p-3 formContainer bg-light" style={{ marginTop: '3rem', width: '40rem', height: '36rem' }}>
         <label
            htmlFor="title-input"
            className="d-block m-1 text-dark cardFont">{this.props.action}
                </label>
            <p className="h4 text-center py-4"></p>

            
            <div className="md-form">
                <i className="" style ={{margin:"inherit", position: "inherit" }}></i>
                <input  value={this.state.userName}
            onChange={this.handleUserNameChange}
            className="form-control w-5 m-1 d-inline text formAuthor cardFont"
            placeholder="username"/>
                <label htmlFor="materialFormCardNameEx" className="font-weight-dark"></label>
            </div>

            
            <div className="md-form">
                <i className=" prefix dark-text"style ={{margin:"inherit", position: "inherit" }}></i>
                <input value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            className="form-control w-5 m-1 d-inline text formAuthor cardFont"
            placeholder="first name" />
                <label htmlFor="materialFormCardEmailEx" className="font-weight-light"></label>
            </div>

            
            <div className="md-form">
                <i className=" prefix grey-text"style ={{margin:"inherit", position: "inherit" }}></i>
                <input value={this.state.lastName}
            onChange={this.handleLastNameChange}
            className="form-control w-70 m-1 d-inline formTitle cardFont bg-light"
            placeholder="last name"/>
                <label htmlFor="materialFormCardConfirmEx" className="font-weight-light info-color"></label>
            </div>

           
            <div className="md-form">
                <i className="prefix grey-text"style ={{margin:"inherit", position: "inherit" }}></i>
                <input value={this.state.email}
              onChange={this.handleEmailChange}
              className="form-control w-70 m-1 d-inline bg-light formContent cardFont"
              placeholder="email"/>
                <label htmlFor="materialFormCardEmailEx" className="font-weight-light"></label>
            </div>

            <div className="text-center py-4 mt-3">
                <button onClick={() => { this.updateUser(post) }}
            type="button"
            className="btn btn-dark btn-sm text-secondary m-2 cardFont">update!</button>
            </div>
        </form>

        {/*  NEED TO DOUBLE CHECK THE CLASSNAME CARD!!! */}
        <div className="card p-3 m-4" style={{ marginTop: '3rem', width: '24rem', height: "30rem" }}>
          <img className="card-img-top" src="https://www.drupal.org/files/issues/default-avatar.png" alt="Card image cap" />
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