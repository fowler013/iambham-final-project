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
      email: ''
    };
  };


  handleFirstNameChange(firstName) {
    this.setState({ firstName });
  }

  handleLastNameChange(lastName) {
    this.setState({ lastName });
  }

  handleEmailChange(email) {
    this.setState({ email });
  }



  componentDidMount() {
    this.getUser();
}

getUser() {
    fetch(`/api/user/${this.props.match.params.id}`)
        .then((response) => {
            return response.json();
        }).then((movie) => {
            console.log(movie);

            this.setState({
                movie: movie
            });
        }).catch((err) => {
            console.log(err);
        });
}

updateUser(post) {
    fetch(`/api/user/${this.props.match.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(() => {
        this.setState({
            user: post
        });
    }).catch((err) => {
        console.log(err);
    });
}



  render() {

    let post = this.state.firstName
    
    return (
      <React.Fragment>
        <form className="card p-3 formContainer bg-dark" style={{ marginTop: '5rem', width: '20rem' }}>
          <label
            htmlFor="title-input"
            className="d-block m-1 text-light cardFont">{this.props.action} post:
                </label>
          <input
            value={this.state.firstName}
            onChange={(event) => { this.handleFirstNameChange(event.target.value) }}
            className="form-control w-5 m-1 d-inline text formAuthor cardFont"
            placeholder="first name"
          />
          <input
            value={this.state.lastName}
            onChange={(event) => { this.handleLastNameChange(event.target.value) }}
            className="form-control w-70 m-1 d-inline formTitle cardFont"
            placeholder="last name"
          />
          <div className="form-group">
            <input value={this.state.email}
              onChange={(event) => { this.handleEmailChange(event.target.value) }}
              className="form-control w-70 m-1 d-inline bg-light formContent cardFont"
              placeholder="email" />
          </div>

          <button
            onClick={() => { this.props.updateUser(this.state) }}
            type="button"
            className="btn btn-light btn-sm text-secondary m-2 cardFont">update!
                </button>
        </form>

        {/*  NEED TO DOUBLE CHECK THE CLASSNAME CARD!!! */}
        <div className="card p-2 m-5" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://www.drupal.org/files/issues/default-avatar.png" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">{post.firstName}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{post.lastName}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{post.email}</p>
            </div>
        </div>
            
      </React.Fragment>
        );
      }
    }
    
export default User;