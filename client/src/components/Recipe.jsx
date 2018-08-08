import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import CreatePageHealthLinks from './RecipePageHealthLinks';
import CreatePageDietLinks from './RecipePageDietLinks';
import NutritionTabs from './RecipePageNutritionMore';
import NutritionStartTabs from './RecipePageNutrition';
import * as ReviewsServices from '../services/reviews';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import moment from 'moment';

import * as SearchServices from '../services/search';
import * as UserServices from '../services/user';
import * as StorageServices from '../services/userStorage';
import * as FavoriteServices from '../services/favorites';
import User from './User';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button1: 'Click Here to Show More',
            loggedIn: false,
            isFavorite: false,
            userid: '',
            userStorage: [],
            pageid: '0',
            reviewContainer: [],
            recipe: {
                healthLabels: [''],
                dietLabels: [''],
                ingredientLines: [''],
                totalTime: '0',
            },
        };
    }

    goGetStorage() {
        if (this.state.userid) {
            StorageServices.all(this.state.userid).then((result) => {
                this.setState({
                    userStorage: result,
                });
            });
        }
    }

    goGetFavorite() {
        if (this.state.userid) {
            FavoriteServices.readByRecipe(this.props.match.params.id).then(
                (result) => {
                    if (result[0].userid === this.state.userid) {
                        this.setState({
                            isFavorite: true,
                        });
                    }
                },
            );
        }
    }

    goGetUser() {
        if (this.state.loggedIn && !this.state.userid) {
            UserServices.me().then((results) => {
                this.setState({
                    userid: results.id,
                });
                this.goGetStorage();
                this.goGetFavorite();
            });
        }
    }

    checkedLogin() {
        if (!this.state.loggedIn) {
            UserServices.checkLogin().then((isAuthenticated) => {
                //console.log("from Services login status is:" + isAuthenticated)
                if (isAuthenticated) {
                    this.setState({
                        loggedIn: isAuthenticated,
                    });
                    this.goGetUser();
                }
            });
        }
    }

    handleNewReview(review) {
        UserServices.me().then((user) => {
            let { id, username } = user;
            console.log(review)
            review.username = username;
            this.setState({
                reviewContainer: [...this.state.reviewContainer, review],
            });
        })
    }

    changetext() {
        if (this.state.button1 === 'Click Here to Show More') {
            this.setState({ button1: 'Click Here to Show Less' });
            return;
        }
        if (this.state.button1 === 'Click Here to Show Less') {
            this.setState({ button1: 'Click Here to Show More' });
            return;
        }
    }

    setdata() {
        let recipeid = this.props.match.params.id;
        if (recipeid !== this.state.pageid) {
            this.gogetdata(recipeid);
        }
    }

    componentDidMount() {
        ReviewsServices.readByRecipe(this.props.match.params.id).then(
            (reviews) => {
                this.setState({
                    reviewContainer: reviews,
                });
            },
        );
    }

    gogetdata(recipeid) {
        SearchServices.read(recipeid).then((data) => {
            this.setState({
                pageid: this.props.match.params.id,
                recipe: data[0],
            });
        });
    }
    checkFavorites() {
        //alert(`Added ${this.state.recipe.label} to favorites!`);
        UserServices.me().then((user) => {
            let { id, firstname } = user;

            alert(`Added ${this.state.recipe.label} to favorites ${firstname}!`)
            let payload = {
                recipeid: this.props.match.params.id,
                userid: id,
            };
            return FavoriteServices.create(payload)
                .then((idObj) => {
                    //console.log(`***** HERE *****`, favorite[0])
                    console.log(idObj);
                })
                .then(() => {
                    this.setState({
                        isFavorite: true,
                    });
                }).catch((err) => {
                    console.error(err);
                });
        }).catch((err) => {
            console.error(err);
        })
    }
    removeFavorites() {
        UserServices.me().then((user) => {
            let { id } = user;
            let payload = {
                recipeid: this.props.match.params.id,
                userid: id,
            };
            return FavoriteServices.destroyByRecipeIdAndUserId(payload).then(
                () => {
                    //console.log('REMOVED');
                    this.setState({
                        isFavorite: false,
                    });
                },
            ).catch((err) => {
                console.error(err);
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    setIngredients(data) {
        if (data) {
            return <p className="card-text">{data}</p>;
        }
    }

    gogetdata(sending) {
        fetch(`/api/search/recipe/${sending}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({
                    pageid: sending,
                    recipe: data[0],
                });
            });
    }

    setIngredients(data) {
        if (data) {
            return <p className="card-text">{data}</p>;
        }
    }

    isFavorite() {
        if (this.state.isFavorite) {
            return (
                <button
                    className="btn btn-warning d-flex m-3"
                    style={{
                        borderRadius: '50%',
                        height: '6rem',
                        width: '6rem',
                    }}
                    onClick={(event) => {
                        this.removeFavorites();
                    }}
                >
                    <i
                        className="far fa-heart"
                        style={{
                            fontSize: '4rem',
                            marginLeft: '-1.125rem',
                            marginTop: '.25rem',
                        }}
                    />
                </button>
            );
        } else {
            return (
                <button
                    className="btn btn-warning d-flex m-3"
                    style={{
                        borderRadius: '50%',
                        height: '6rem',
                        width: '6rem',
                        opacity: '0.2',
                    }}
                    onClick={(event) => {
                        this.checkFavorites();
                    }}
                >
                    <i
                        className="far fa-heart"
                        style={{
                            fontSize: '4rem',
                            marginLeft: '-1.125rem',
                            marginTop: '.25rem',
                        }}
                    />
                </button>
            );
        }
    }

    render() {
        this.setdata();
        this.checkedLogin();
        //console.log(this.state.loggedIn)
        // console.log(this.state.userid)
        //console.log(this.state.userStorage)
        // console.log(this.state.isFavorite);

        return (
            <React.Fragment>
                <div className="container my-3">
                    <div
                        className="card mx-auto"
                        style={{
                            minHeight: '30rem',
                            maxWidth: '50rem',
                            borderBottomLeftRadius: '10px',
                            borderTopLeftRadius: '10px',
                            backgroundImage: `url('${
                                this.state.recipe.image
                            }') , url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="card-body p-0">
                            <div className="view overlay">
                                <div className="d-flex justify-content-between">
                                    {this.isFavorite()}
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="card text-center mb-2 bg-warning text-white">
                                            <div className="card-body">
                                                <i
                                                    className="far fa-clock"
                                                    style={{ fontSize: '2rem' }}
                                                />
                                                <p className="card-text text-white">
                                                    {
                                                        this.state.recipe
                                                            .totalTime
                                                    }{' '}
                                                    mins
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card text-center mb-2 bg-warning text-white">
                                            <div className="card-body">
                                                <i
                                                    className="fas fa-list-ol"
                                                    style={{ fontSize: '2rem' }}
                                                />
                                                <p className="card-text text-white">
                                                    {
                                                        this.state.recipe
                                                            .ingredientLines
                                                            .length
                                                    }{' '}
                                                    Ingredients
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card text-center mb-2 bg-warning text-white">
                                            <div className="card-body">
                                                <i
                                                    className="fas fa-cookie-bite"
                                                    style={{ fontSize: '2rem' }}
                                                />
                                                <p className="card-text text-white">
                                                    {Math.floor(
                                                        this.state.recipe
                                                            .calories /
                                                            this.state.recipe
                                                                .yield,
                                                    ) || 0}{' '}
                                                    Calories
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card text-center mb-2 bg-warning text-white">
                                            <div className="card-body">
                                                <i
                                                    className="fas fa-users"
                                                    style={{ fontSize: '2rem' }}
                                                />
                                                <p className="card-text text-white">
                                                    {this.state.recipe.yield ||
                                                        0}{' '}
                                                    Servings
                                                </p>
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
                                <strong>{this.state.recipe.label}</strong>
                            </h4>

                            <h6 className="font-weight-bold indigo-text py-2">
                                From: {this.state.recipe.source}
                            </h6>
                        </div>
                    </div>

                    <div className="card my-3">
                        <div className="card-body text-center">
                            {this.state.recipe.healthLabels.map((element) =>
                                CreatePageHealthLinks({ health: element }),
                            )}
                            {this.state.recipe.dietLabels.map((element) =>
                                CreatePageDietLinks({ diet: element }),
                            )}
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="card-header primary-color white-text">
                            Ingredients
                        </h3>
                        <div className="card-body">
                            {this.state.recipe.ingredientLines.map((element) =>
                                this.setIngredients(element),
                            )}
                            <a
                                className="btn btn-outline-primary btn-block"
                                href={this.state.recipe.url}
                            >
                                Go to {this.state.recipe.source}
                            </a>
                        </div>
                    </div>

                    <div className="card my-3">
                        <h3 className="card-header primary-color white-text d-flex align-items-center justify-content-between">
                            <span>Nutrition</span>
                            <button
                                className="btn btn-outline-light"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                onClick={(event) => {
                                    this.changetext();
                                }}
                            >
                                {this.state.button1}
                            </button>
                        </h3>
                        <div className="card-body">
                            <div className="row">
                                <div className=" col text-center">
                                    <div
                                        className="card bg-primary rounded-circle border border-primary mx-auto"
                                        style={{
                                            overflow: 'hidden',
                                            width: '8rem',
                                            height: '8rem',
                                        }}
                                    >
                                        <div
                                            className="position-absolute"
                                            style={{ zIndex: '0' }}
                                        >
                                            <div
                                                className="bg-dark"
                                                style={{
                                                    overflow: 'hidden',
                                                    width: '8rem',
                                                    minHeight: `${8 *
                                                        (1 -
                                                            (Math.ceil(
                                                                this.state
                                                                    .recipe
                                                                    .calories /
                                                                    this.state
                                                                        .recipe
                                                                        .yield,
                                                            ) || 500) /
                                                                2000)}rem`,
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="position-absolute text-white"
                                            style={{
                                                top: '50%',
                                                zIndex: '1',
                                                left: '50%',
                                                transform:
                                                    'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className="p-0 m-0"
                                                    style={{ fontSize: '2rem' }}
                                                >
                                                    {Math.ceil(
                                                        this.state.recipe
                                                            .calories /
                                                            this.state.recipe
                                                                .yield,
                                                    ) || 500}
                                                </p>
                                                <p
                                                    className="text-uppercase"
                                                    style={{
                                                        marginTop: '-0.5rem',
                                                    }}
                                                >
                                                    Calories
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-italic text-primary">
                                        per serving
                                    </p>
                                </div>
                                {NutritionStartTabs({
                                    totalDaily: this.state.recipe.totalDaily,
                                    totalNutrition: this.state.recipe
                                        .totalNutrients,
                                    serving: this.state.recipe.yield,
                                })}
                            </div>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                <p className="text-center text-primary">
                                    * Percent Daily Values are based on a 2,000
                                    calorie diet. Your Daily Values may be
                                    higher or lower depending on your calorie
                                    needs.
                                </p>
                                <div className="row">
                                    {NutritionTabs({
                                        totalDaily: this.state.recipe
                                            .totalDaily,
                                        totalNutrition: this.state.recipe
                                            .totalNutrients,
                                        serving: this.state.recipe.yield,
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '100%' }}>
                        <h3 className="card-header primary-color white-text d-flex align-items-center justify-content-between">
                            Reviews<span>
                                <ReviewForm
                                    onChange={(review) => {
                                        this.handleNewReview(review);
                                    }}
                                    recipe={this.state.recipe.label}
                                    recipeid={this.props.match.params.id}
                                    userid={this.state.userid}
                                />
                            </span>
                        </h3>
                        <div
                            className="card-body"
                            style={{
                                maxHeight: '500px',
                                overflow: 'scroll',
                                width: '100%',
                            }}
                        >
                            {this.state.reviewContainer.map((review) => {
                                //console.log(review);
                                return (
                                    <div
                                        className="review-card-container"
                                        style={{ width: '90%', margin: 'auto' }}
                                    >
                                        <ReviewCard
                                            key={review.id}
                                            image={this.state.recipe.image}
                                            date={review._created}
                                            username={review.username}
                                            review={review.review}
                                            ratings={review.ratings}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recipe;
