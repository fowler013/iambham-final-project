import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { isString } from "util";

let codeWord = (string) =>{
    if (string === "Alcohol-Free") {
        return (["alcohol-free", "Alcohol Free"])
    }

    if(string === "Dairy-Free") {
        return (["dairy-free", "Dairy Free"])   
    }
    if(string === "Celery-Free") {
        return (["celery-free", "Celery Free"])   
    }
    if(string === "Crustacean-Free") {
        return (["crustacean-free", "Crustacean Free"])   
    }
    if(string === "Eggs-Free") {
        return (["egg-free", "Egg Free"])   
    }
    if(string === "Fish-Free") {
        return (["fish-free", "Fish Free"])   
    }
    if(string === "Gluten-Free") {
        return (["gluten-free", "Gluten Free"])   
    }
    if(string === "Kidney-Friendly") {
        return (["kidney-freindly", "Kidney Friendly"])   
    }
    if(string === "Kosher") {
        return (["kosher", "Kosher"])   
    }
    if(string === "Low-Potassium") {
        return (["low-potassium", "Low Postassium"])   
    }
    if(string === "Lupine-Free") {
        return (["lupine-free", "Lupine Free"])   
    }
    if(string === "Mustard-Free") {
        return (["mustard-free", "Mustard Free"])   
    }
    if(string === "No oil added") {
        return (["no-oil-added", "Oil Free"])   
    }
    if(string === "Paleo") {
        return (["paleo", "Paleo"])   
    }
    if(string === "No sugar") {
        return (["no-sugar", "Sugar Free"])   
    }
    if(string === "Peanut-Free") {
        return (["peanut-free", "Peanut Free"])   
    }
    if(string === "Pescatarian") {
        return (["pescatarian", "Pescatarian"])   
    }
    if(string === "Pork-free") {
        return (["pork-free", "Pork Free"])   
    }
    if(string === "Red meat-free") {
        return (["red-meat-free", "No Red Meats"])   
    }
    if(string === "Sesame-free") {
        return (["sesame-free", "Sesame Free"])   
    }
    if(string === "Shellfish") {
        return (["shellfish-free", "Shellfish Free"])   
    }
    if(string === "Soy") {
        return (["soy-free", "Soy Free"])   
    }
    if(string === "Sugar-Conscious") {
        return (["sugar-conscious", "Low Sugar"])   
    }
    if(string === "Tree-Nut-Free") {
        return (["tree-nut-free", "No Tree Nuts"])   
    }
    if(string === "Vegan") {
        return (["vegan", "Vegan"])   
    }
    if(string === "Vegetarian") {
        return (["vegetarian", "Vegetarian"])   
    }
    if(string === "Wheat-free") {
        return (["wheat-free", "Wheat Free"])   
    }
    return (["",""])
}

let CreatePageHealthLinks = (data) => {
    let codearry = codeWord(Object.values(data)[0])
    //console.log(codearry);



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
export default CreatePageHealthLinks;