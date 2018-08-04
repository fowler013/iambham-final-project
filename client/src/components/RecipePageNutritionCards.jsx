import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';



let CreateNutritionTabs = ({name, amount, type, precentage, servings}) => {
let theprecentage = 0;
if(+precentage >= 100)  {
    theprecentage = 100
} else {
    theprecentage = +precentage
}

        return <div className="text-center">
            <div className="card bg-primary rounded-circle border border-primary" style={{ overflow: "hidden", width: "8rem", height: "8rem" }}>
              <div className="position-absolute" style={{ zIndex: "0" }}>
                <div className="bg-dark" style={{ overflow: "hidden", width: "8rem", minHeight: `${8 * (1 - (theprecentage/100)/servings)}rem` }} />
              </div>
              <div className="position-absolute text-white" style={{ top: "50%", zIndex: "1", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div>
                  <p className="p-0 m-0" style={{ fontSize: "2rem" }}>
                    {Math.floor(+precentage/servings) || 0}%
                  </p>
                  <p className="text-uppercase" style={{ marginTop: "-0.5rem", marginBottom: "0" }}>
                    {name}
                  </p>
                </div>
              </div>
            </div>
            <p className="font-italic text-primary">{Math.floor(amount/servings)}{type}</p>
          </div>;
    }
export default CreateNutritionTabs;