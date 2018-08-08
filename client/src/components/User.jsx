import React, { Fragment } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import * as UserService from '../services/users';
import ReviewCard from './ReviewCard';
import * as ReviewService from '../services/reviews';
import moment from 'moment';
import * as LoginService from '../services/user';
import * as FavoriteService from '../services/favorites';
import * as searchService from '../services/search';
import Login from '../auth/login';
import { cloneDeep, flattenDeep } from 'lodash';

class User extends React.Component {
    user;

    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
            },
            recipeid: this.props.recipeid,
            favoriteRecipes: [],
            favoriteRecipe: '',
            isUpdating: false,
        };
    }

    componentDidMount() {
        LoginService.me()
            .then((user) => {
                const { id } = user;

                this.user = cloneDeep(user);

                this.setState({
                    user: {
                        id: user.id,
                        firstName: user.firstname,
                        lastName: user.lastname,
                        email: user.email,
                        userName: user.username,
                    },
                });

                return FavoriteService.readByUserid(this.user.id);
            })
            .then((favorites) => {
                this.favorites = favorites;
                let promises = favorites.map((favorite) => {
                    return searchService.readRecipeById(favorite.recipeid);
                });

                return Promise.all(promises);
            })
            .then((recipes) => {
                let recipesFlattened = flattenDeep(recipes);

                recipesFlattened.forEach((recipe) => {
                    let recipeIdIndex = recipe.uri.lastIndexOf('_');

                    recipe.id = recipe.uri.slice(recipeIdIndex + 1);
                });

                this.setState({
                    favoriteRecipes: recipesFlattened,
                });
            });
    }

    handleFirstNameChange(e) {
        this.setState({
            user: Object.assign({}, this.state.user, {
                firstName: e.target.value,
            }),
        });
    }

    handleLastNameChange(e) {
        this.setState({
            user: Object.assign({}, this.state.user, {
                lastName: e.target.value,
            }),
        });
    }

    handleEmailChange(e) {
        this.setState({
            user: Object.assign({}, this.state.user, {
                email: e.target.value,
            }),
        });
    }

    handleUserNameChange(e) {
        this.setState({
            user: Object.assign({}, this.state.user, {
                userName: e.target.value,
            }),
        });
    }

    toggleUpdate() {
        if (this.state.isUpdating) {
            this.setState({
                isUpdating: !this.state.isUpdating,
                user: {
                    id: this.user.id,
                    firstName: this.user.firstname,
                    lastName: this.user.lastname,
                    email: this.user.email,
                    userName: this.user.username,
                },
            });
            return;
        }

        this.setState({
            isUpdating: !this.state.isUpdating,
        });
    }

    renderButton() {
        if (this.state.isUpdating) {
            return (
                <React.Fragment>
                    <button
                        onClick={() => {
                            this.toggleUpdate();
                        }}
                        type="button"
                        className="btn btn-sm  m-2 cardFont"
                        style={{
                            backgroundColor: 'red',
                        }}
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={() => {
                            this.handleSubmit();
                        }}
                        type="button"
                        className="btn btn-sm  m-2 cardFont"
                        style={{
                            backgroundColor: 'rgb(252, 114, 76)',
                        }}
                    >
                        SUBMIT
                    </button>
                </React.Fragment>
            );
        } else {
            return (
                <button
                    onClick={() => {
                        this.toggleUpdate();
                    }}
                    type="button"
                    className="btn btn-sm  m-2 cardFont"
                    style={{
                        backgroundColor: ' rgb(252, 114, 76)',
                    }}
                >
                    UPDATE
                </button>
            );
        }
    }

    handleSubmit() {
        let sending = {
            firstname: this.state.user.firstName || null,
            lastname: this.state.user.lastName || null,
            email: this.state.user.email || null,
            username: this.state.user.userName || null,
        };

        return UserService.update(this.user.id, sending)
            .then(() => {
                this.setState({
                    user: Object.assign({}, this.state.user, {
                        firstName: sending.firstname,
                        lastName: sending.lastname,
                        email: sending.email,
                        userName: sending.username,
                    }),
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div
                className="home-page-container"
                style={{ height: '100vh', paddingTop: '3em' }}
            >
                <div className="container">
                    <form className="my-2" key={this.state.user.id}>
                        <div className="row">
                            <div class="col-lg-6 col-md-6">
                                <h3 className="text-center mb-4">
                                    Account Info
                                </h3>
                                <div className="form-group">
                                    <label htmlFor="inputEmail4">
                                        First Name
                                    </label>
                                    <input
                                        value={this.state.user.firstName}
                                        onChange={(ev) => {
                                            this.handleFirstNameChange(ev);
                                        }}
                                        className="form-control"
                                        id="inputFirstName4"
                                        placeholder="Firstname"
                                        disabled={!this.state.isUpdating}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword4">
                                        Last Name
                                    </label>
                                    <input
                                        onChange={(ev) => {
                                            this.handleLastNameChange(ev);
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="inputLastName4"
                                        placeholder="Lastname"
                                        value={this.state.user.lastName}
                                        disabled={!this.state.isUpdating}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        User Name
                                    </label>
                                    <input
                                        onChange={(ev) => {
                                            this.handleUserNameChange(ev);
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="inputUserName4"
                                        placeholder="Username"
                                        value={this.state.user.userName}
                                        disabled={!this.state.isUpdating}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Email</label>
                                    <input
                                        onChange={(ev) => {
                                            this.handleEmailChange(ev);
                                        }}
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Email"
                                        value={this.state.user.email}
                                        disabled={!this.state.isUpdating}
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    {this.renderButton()}
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <h3 className="text-center mb-4">
                                    Favorite Recipes
                                </h3>
                                <div
                                    style={{
                                        border: '1px solid black',
                                        backgroundColor: 'lightgrey',
                                        padding: '1em',
                                        borderRadius: '4px',
                                    }}
                                >
                                    {this.state.favoriteRecipes.map(
                                        (recipe) => {
                                            return (
                                                <NavLink
                                                    key={recipe.id}
                                                    to={`/recipe/${recipe.id}`}
                                                >
                                                    <p>{recipe.label}</p>
                                                </NavLink>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default User;
