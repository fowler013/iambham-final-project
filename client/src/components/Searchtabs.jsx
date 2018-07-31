import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';




let SearchTabs = (data) => {
    let {recipe} = data
    let { calories, dietLabels, healthLabels, image, label: title, source, totalTime: time, yield: servings, ingredientLines: ingr, url: insturctionurl, uri: recipeIDurl } = recipe

        return <React.Fragment>
            <div className="col my-1">
              <div className="card m-auto" style={{ height: "24rem", width: "18rem" }}>
                    <NavLink to={`/recipe/${recipeIDurl.split('recipe_')[1]}`}><div className="card-img-top" style={{ height: "10rem", width: "18rem", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                  <div className="d-flex justify-content-end">
                    <div className="text-center bg-warning p-2" style={{borderBottomLeftRadius: '25%'}}>
                                <i className="far fa-clock"style={{fontSize: "2rem"}}></i>
                                
                      <p className="mb-0"><small>{time} mins</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    From: {source}
                  </h6>
                  <h5 className="card-title">{title}</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>;
};
export default SearchTabs;