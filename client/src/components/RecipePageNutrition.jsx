import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import CreateNutritionTabs from './RecipePageNutritionCards'



let NutritionStartTabs = ({ totalDaily, totalNutrition, serving }) => {
//console.log('got here')
    // name, amount, type, precentage, servings
    if(totalNutrition) {
                 let thename = totalNutrition["SUGAR"]["label"];
                 let theamount = +totalNutrition["SUGAR"]["quantity"];
                 let thetype = totalNutrition["SUGAR"]["unit"];
                 let theprecentage = ((theamount/31.25)*100)
                 let theservings = +serving;
                 return CreateNutritionTabs({ name: thename, amount: theamount, type: thetype, precentage: theprecentage, servings: theservings })
    }
}
export default NutritionStartTabs;