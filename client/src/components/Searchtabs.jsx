import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import moment from "moment";
import "moment-duration-format"


let cookTime = (time) => {

  let howLong = moment.duration((time), "minutes").format("y [yrs], M [Mnths], w [wks], d [ds], h [hrs], m [mins]");
  return (howLong.split(',')[0])
}

let placeImage = (image, source) => {
  if (source === "David Lebovitz") {
    return ('https://www.davidlebovitz.com/wp-content/themes/davidlebovitz/images/logo.png')
  } else {
    return image
  }
}

let SearchTabs = (data) => {
    let {recipe} = data
    let { calories, dietLabels, healthLabels, image, label: title, source, totalTime: time, yield: servings, ingredientLines: ingr, url: insturctionurl, uri: recipeIDurl } = recipe

        return <React.Fragment>
            <div className=" col my-3 d-flex justify-content-center box-shadow" key={`card${recipeIDurl.split("recipe_")[1]}`}>
              <div className="card card-cascade" style={{ height: "32rem", width: "22rem" }}>
                <NavLink to={`/recipe/${recipeIDurl.split("recipe_")[1]}`}>
                <div className="card-img-top" key={`image${recipeIDurl.split("recipe_")[1]}`} style={{ height: "10rem", width: "22rem", backgroundImage: `url(${placeImage(image, source)})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="d-flex justify-content-end">
                      <div className="text-center bg-light p-2" style={{ borderBottomLeftRadius: "15%" }}>
                        <i className="far fa-clock" style={{ fontSize: "2rem", color: "black" }} />

                        <p className="mb-0" style={{ color: "black", textDecoration: "none" }}>
                          <small>{cookTime(time)}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
                <div className="card-body" style={{backgroundColor: "white" }}>
                  <h6 className="card-subtitle mb-2 text-muted">
                    From: {source}
                  </h6>
                <h5 className="card-title lign-middle text-center mb-0" style={{height: "48px"}}>{title}</h5>

                <div className="card text-white bg-warning mb-3">
                  <div className="card-header bg-primary" ><span style={{color: "white"}}>Ingredients</span></div>
                  <div className="card-body bg-light" >
                    <div className="mb-2" style={{ height: "75px", overflowY: 'scroll', position: 'relative'}}>
                      {ingr.map((element, index) => {
                        return (<p className="px-1" style={{color: "black"}}><small>{element}</small></p>)
                      })}
                    </div>
                  </div>
                </div>
                <a href={insturctionurl} target="_blank" className="btn btn-primary btn-block align-text-bottom">
                    Go to {source}
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>;
};
export default SearchTabs;