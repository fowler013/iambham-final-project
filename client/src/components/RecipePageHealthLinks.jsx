import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { isString } from "util";

let codeWord = (string) =>{
    if(string === Dairy) {
        return ("dairy-free")   
    }
    if(string === "Celery-free") {
        return ("celery-free")   
    }
    if(string === "Crustacean-free") {
        return ("crustacean-free")   
    }
    if(string === Eggs) {
        return ("egg-free")   
    }
    if(string === Fish) {
        return ("fish-free")   
    }
    if(string === Gluten) {
        return ("gluten-free")   
    }
    if(string === "Kidney friendly") {
        return ("kidney-freindly")   
    }
    if(string === Kosher) {
        return ("kosher")   
    }
    if(string === "Low potassium") {
        return ("low-potassium")   
    }
    if(string === "Lupine-free") {
        return ("lupine-free")   
    }
    if(string === "Mustard-free") {
        return ("mustard-free")   
    }
    if(string === "No oil added") {
        return ("no-oil-added")   
    }
    if(string === Paleo) {
        return ("paleo")   
    }
    if(string === "No sugar") {
        return ("no-sugar")   
    }
    if(string === Peanuts) {
        return ("peanut-free")   
    }
    if(string === Pescatarian) {
        return ("pescatarian")   
    }
    if(string === "Pork-free") {
        return ("pork-free")   
    }
    if(string === "Red meat-free") {
        return ("red-meat-free")   
    }
    if(string === "Sesame-free") {
        return ("sesame-free")   
    }
    if(string === Shellfish) {
        return ("shellfish-free")   
    }
    if(string === Soy) {
        return ("soy-free")   
    }
    if(string === "Sugar-conscious") {
        return ("sugar-conscious")   
    }
    if(string === "Tree nuts") {
        return ("tree-nut-free")   
    }
    if(string === Vegan) {
        return ("vegan")   
    }
    if(string === Vegetarian) {
        return ("vegetarian")   
    }
    if(string === "Wheat-free") {
        return ("wheat-free")   
    }
}

let CreatePageHealthLinks = (data) => {
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
export default CreatePageHealthLinks;