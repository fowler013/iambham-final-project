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
import CreateNutritionTabs from "./RecipePageNutritionCards";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageid: "0",
      reviews: [],
      recipe: {
        healthLabels: [""],
        dietLabels: [""],
        ingredientLines: [""],
        totalTime: "0",
        totalDaily: [],
        totalNutrients: []
      }
    };
  }


  setdata() {
    let recipeid = this.props.location.pathname.slice(8);
    console.log(recipeid);
    if (recipeid !== this.state.pageid) {
      this.gogetdata(recipeid);
      this.goGetReviews(recipeid)
    }
  }

  goGetReviews(id) {
    fetch(`/api/review/recipe/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          reviews: data
        });
      });
  }

  gogetdata(sending) {
    fetch(`/api/search/${sending}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          pageid: this.props.location.pathname.slice(8),
          recipe: data[0]
        });
      });
  }
  
  setIngredients(data) {
    if (data) {
      return <p className="card-text">{data}</p>;
    }
  }
  goSetNutrientsFAT() {

    if (this.state.recipe.totalDaily.FAT !== undefined) {
      let thename = this.state.recipe.totalDaily.FAT.label;
      let theprecentage = this.state.recipe.totalDaily.FAT.quantity;
      let thetype = this.state.recipe.totalNutrients.FAT.unit;
      let theamount = this.state.recipe.totalNutrients.FAT.quantity;
      let theservings = this.state.recipe.yield;

      return CreateNutritionTabs({
        name: thename,
        amount: `${Math.floor(theamount)}`,
        type: `${thetype}`,
        precentage: theprecentage,
        servings: theservings
      });
    }
  }
  goSetNutrientsSodium() {

    if (this.state.recipe.totalDaily.NA !== undefined) {
      let thename = this.state.recipe.totalDaily.NA.label;
      let theprecentage = this.state.recipe.totalDaily.NA.quantity;
      let thetype = this.state.recipe.totalNutrients.NA.unit;
      let theamount = this.state.recipe.totalNutrients.NA.quantity;
      let theservings = this.state.recipe.yield

      return CreateNutritionTabs({
        name: thename,
        amount: `${Math.floor(theamount)}`,
        type: `${thetype}`,
        precentage: theprecentage,
        servings: theservings
      });
    }
  }

  goSetNutrientsCarbs() {

    if (this.state.recipe.totalDaily.CHOCDF !== undefined) {
      let thename = this.state.recipe.totalDaily.CHOCDF.label;
      let theprecentage = this.state.recipe.totalDaily.CHOCDF.quantity;
      let thetype = this.state.recipe.totalNutrients.CHOCDF.unit;
      let theamount = this.state.recipe.totalNutrients.CHOCDF.quantity;
      let theservings = this.state.recipe.yield

      return CreateNutritionTabs({
        name: thename,
        amount: `${Math.floor(theamount)}`,
        type: `${thetype}`,
        precentage: theprecentage,
        servings: theservings
      });
    }
  }

  goSetNutrientsProtiens() {

    if (this.state.recipe.totalDaily.PROCNT !== undefined) {
      let thename = this.state.recipe.totalDaily.PROCNT.label;
      let theprecentage = this.state.recipe.totalDaily.PROCNT.quantity;
      let thetype = this.state.recipe.totalNutrients.PROCNT.unit;
      let theamount = this.state.recipe.totalNutrients.PROCNT.quantity;
      let theservings = this.state.recipe.yield

      return CreateNutritionTabs({
        name: thename,
        amount: `${Math.floor(theamount)}`,
        type: `${thetype}`,
        precentage: theprecentage,
        servings: theservings
      });
    }
  }
  render() {
    // this.setdata();
    console.log(this.state.recipe);

    return <React.Fragment>
        <div className="container mt-3">
          <div className="card" style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", backgroundImage: `url('${this.state.recipe.image}') , url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="card-body p-0">
              <div className="view overlay">
                <div className="d-flex">
                  <div className="col" style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", height: "40rem", minWidth: "60rem", maxWidth: "100%" }} />
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
              <button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Click Here to learn More
              </button>
            </h3>
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <div className="card bg-primary rounded-circle border border-primary" style={{ overflow: "hidden", width: "8rem", height: "8rem" }}>
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
                {this.goSetNutrientsFAT()}
                {this.goSetNutrientsSodium()}
                {this.goSetNutrientsCarbs()}
                {this.goSetNutrientsProtiens()}
              </div>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia
                aute, non cupidatat skateboard dolor brunch. Food truck
                quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee
                nulla assumenda shoreditch et. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-header primary-color white-text">
              Reviews
            </h3>
            <div className="card-body">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">
                With supporting text below as a natural lead-in to
                additional content.
              </p>
              <a className="btn btn-outline-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </React.Fragment>;
  }
}

export default Recipe;
