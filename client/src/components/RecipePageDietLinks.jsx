import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { isString } from "util";

let codeWord = (string) => {
    if (string === "Balanced") {
        return (["balanced","Balanced"]);
    }
    if (string === "High-Fiber") {
        return (["high-fiber","High Fiber"]);
    }
    if (string === "High-Protein") {
        return (["high-protein","High Protein"]);
    }
    if (string === "Low-Carb") {
        return (["low-carb","Low Carbs"]);
    }
    if (string === "Low-Fat") {
        return (["low-fat","Low Fat"]);
    }
    if (string === "Low-Sodium") {
        return (["low-sodium"," Low Sodium"]);
    }
    return (["", ""])
}

let CreatePageDietLinks = (data) => {

    let codearry = codeWord(Object.values(data)[0])
    //console.log(codearry)




    if (Object.values(data)[0] !== "") {
        return <button type="button" key={`${Object.keys(data)[0]}-${codearry[0]}`} className="btn btn-outline-primary btn-lg" style={{ borderRadius: "50px" }}>
            <NavLink
                to={`/search/keyword=&${Object.keys(data)[0]}=${codearry[0]}`}
            >
                {codearry[1]}
            </NavLink>
        </button>;
    }
};
export default CreatePageDietLinks;