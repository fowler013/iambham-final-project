import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { isString } from "util";

let codeWord = (string) => {
    if (string === "Balanced") {
        return "balanced";
    }
    if (string === "High-Fiber") {
        return "high-fiber";
    }
    if (string === "High-Protein") {
        return "high-protein";
    }
    if (string === "Low-Carb") {
        return "low-carb";
    }
    if (string === "Low-Fat") {
        return "low-fat";
    }
    if (string === "Low-Sodium") {
        return "low-sodium";
    }
}

let CreatePageDietLinks = (data) => {
 console.log(data)
 console.log(Object.keys(data)[0])




    if (isString(Object.values(data)[0])) {
        return <button type="button" key={`${Object.keys(data)[0]}-${Object.values(data)[0]}`} className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
          <NavLink
                to={`/search/keyword=&${Object.keys(data)[0]}=${Object.values(data)[0]}`}
          >
            Large button
          </NavLink>
        </button>;
    }
};
export default CreatePageDietLinks;