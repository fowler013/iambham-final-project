import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';


let RecipeReviews = (id) => {
    getReviews(sending) {
        fetch(`/api/search/${sending}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            this.setState({
              pageid: this.props.location.pathname.slice(8),
              recipe: data[0]
            });
          });
      }
};
export default RecipeReviews