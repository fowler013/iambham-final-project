import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import CreatePageHealthLinks from "./RecipePageHealthLinks";
import CreatePageDietLinks from "./RecipePageDietLinks";
import NutritionTabs from "./RecipePageNutritionMore";
import NutritionStartTabs from "./RecipePageNutrition";
import * as ReviewsServices from '../services/reviews';
import ReviewCard from "./ReviewCard";
import ReviewForm from './ReviewForm';
import moment from 'moment';


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: "Click Here to Show More",
      pageid: "0",
      reviewContainer: [],
      recipe: {
        healthLabels: [""],
        dietLabels: [""],
        ingredientLines: [""],
        totalTime: "0",

      }
    };
  }

  changetext() {
    if (this.state.button1 === "Click Here to Show More") {
      this.setState ({button1: "Click Here to Show Less"})
      return
    }
    if (this.state.button1 === "Click Here to Show Less") {
      this.setState({ button1: "Click Here to Show More" })
      return
    }
  }

  setdata() {
    let recipeid = this.props.location.pathname.slice(8);

    if (recipeid !== this.state.pageid) {
      this.gogetdata(recipeid);
    }
  }

  componentDidMount() {
    ReviewsServices.readByRecipe(this.props.match.params.id).then((reviews) => {
      //console.log(reviews);
      Object.values(reviews).forEach((review => {
        //console.log(review)
        this.setState({
          reviewContainer: [...this.state.reviewContainer, review]
        })
      }))
    })
    //fetch(`/api/review/recipe/${id}`, {
    //  method: "GET",
    //  headers: { "Content-Type": "application/json" }
    //})
    //  .then(res => res.json())
    //  .then(data => {
    //    console.log(data);
    //    this.setState({
    //      reviews: data
    //    });
    //  });
  }

  gogetdata(sending) {
    fetch(`/api/search/recipe/${sending}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState({
          pageid: sending,
          recipe: data[0]
        });
      });
  }
  
  setIngredients(data) {
    if (data) {
      return <p className="card-text">{data}</p>;
    }
  }

  render() {
    this.setdata();

    return <React.Fragment>
        <div className="container my-3">
        <div className="card" style={{ minHeight: "40rem", borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", backgroundImage: `url('${this.state.recipe.image}') , url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" , backgroundPosition: "center"}}>
            <div className="card-body p-0">
              <div className="view overlay">
              <div className="d-flex justify-content-end">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i className="far fa-clock" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">
                          {this.state.recipe.totalTime} mins
                        </p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i className="fas fa-list-ol" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">
                          {this.state.recipe.ingredientLines.length}{" "}
                          Ingredients
                        </p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i className="fas fa-cookie-bite" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">
                          {Math.floor(
                            this.state.recipe.calories /
                              this.state.recipe.yield
                          ) || 0}{" "}
                          Calories
                        </p>
                      </div>
                    </div>
                    <div className="card text-center mb-2 bg-warning text-white">
                      <div className="card-body">
                        <i className="fas fa-users" style={{ fontSize: "2rem" }} />
                        <p className="card-text text-white">
                          {this.state.recipe.yield || 0} Servings
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
              {this.state.recipe.healthLabels.map(element =>
                CreatePageHealthLinks({ health: element })
              )}
              {this.state.recipe.dietLabels.map(element =>
                CreatePageDietLinks({ diet: element })
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="card-header primary-color white-text">
              Ingredients
            </h3>
            <div className="card-body">
              {this.state.recipe.ingredientLines.map(element =>
                this.setIngredients(element)
              )}
              <a className="btn btn-outline-primary btn-block" href={this.state.recipe.url}>
                Go to {this.state.recipe.source}
              </a>
            </div>
          </div>

          <div className="card my-3">
            <h3 className="card-header primary-color white-text d-flex align-items-center justify-content-between">
              <span>Nutrition</span>
            <button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={event => { this.changetext() }}>
                {this.state.button1}
              </button>
            </h3>
            <div className="card-body">
              <div className="row">
                <div className=" col text-center">
                  <div className="card bg-primary rounded-circle border border-primary mx-auto" style={{ overflow: "hidden", width: "8rem", height: "8rem" }}>
                    <div className="position-absolute" style={{ zIndex: "0" }}>
                      <div className="bg-dark" style={{ overflow: "hidden", width: "8rem", minHeight: `${8 * (1 - (Math.ceil(this.state.recipe.calories / this.state.recipe.yield) || 500) / 2000)}rem` }} />
                    </div>
                    <div className="position-absolute text-white" style={{ top: "50%", zIndex: "1", left: "50%", transform: "translate(-50%, -50%)" }}>
                      <div>
                        <p className="p-0 m-0" style={{ fontSize: "2rem" }}>
                          {Math.ceil(this.state.recipe.calories / this.state.recipe.yield) || 500}
                        </p>
                        <p className="text-uppercase" style={{ marginTop: "-0.5rem" }}>
                          Calories
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-italic text-primary">per serving</p>
                </div>
                {NutritionStartTabs({totalDaily: this.state.recipe.totalDaily, totalNutrition: this.state.recipe.totalNutrients, serving: this.state.recipe.yield})}
              </div>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <p className="text-center text-primary">
                  * Percent Daily Values are based on a 2,000 calorie diet.
                  Your Daily Values may be higher or lower depending on your
                  calorie needs.
                </p>
                <div className="row">
                  {NutritionTabs({
                    totalDaily: this.state.recipe.totalDaily,
                    totalNutrition: this.state.recipe.totalNutrients,
                    serving: this.state.recipe.yield
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '100%' }}>
          <h3 className="card-header primary-color white-text d-flex align-items-center justify-content-between">
              Reviews<span>
              <ReviewForm 
                recipe={this.state.recipe.label}
                recipeid={this.props.match.params.id}
              /></span>
            </h3>
            <div className="card-body" style={{ maxHeight: '500px', overflow: 'scroll', width: '100%' }}>
              {this.state.reviewContainer.map((review) => {
                console.log(review)
                return (
                  <div className="review-card-container" style={{ width: '90%', margin: 'auto' }}>
                    <ReviewCard
                    key={review.id}
                    image={this.state.recipe.image}
                    date={moment(review._created).fromNow()}
                    username={review.username}
                    review={review.review}
                    ratings={review.ratings}
                    />
                  </div>
                )
              })}
              {/*<a className="btn btn-outline-primary">Go somewhere</a>*/}
            </div>
          </div>
        </div>
      </React.Fragment>;
  }
}

export default Recipe;