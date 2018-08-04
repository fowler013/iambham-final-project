import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import CreateNutritionTabs from './RecipePageNutritionCards'



let NutritionTabs = ({ totalDaily, totalNutrition, serving }) => {

    // name, amount, type, precentage, servings
    if(totalDaily) {
         return (
             Object.keys(totalDaily).map(element => {
                 let thename = totalDaily[element]["label"];
                 let theamount = +totalNutrition[element]["quantity"];
                 let thetype = totalNutrition[element]["unit"];
                 let theprecentage = +totalDaily[element]["quantity"]
                 let theservings = +serving;
                 return CreateNutritionTabs({ name: thename, amount: theamount, type: thetype, precentage: theprecentage, servings: theservings })
             })
         )
    }
}
export default NutritionTabs;