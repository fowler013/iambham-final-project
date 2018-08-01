import React, { Component } from "react";
import Diets from "./diets";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        // change these *****
        items: "",
        exclusions: ""
      }
    };
  }
  handleBlogSubmit() {
    // POST
    let url = "/api/search/";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        console.log(res.json());
        //return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleItemsChange(items) {
    // change these ***** ALSO NAME
    let data = Object.assign({}, this.state.data, { items });
    this.setState({ data });
  }
  handleExclusionsChange(exclusions) {
    // change these ***** ALSO NAME
    let data = Object.assign({}, this.state.data, { exclusions });
    this.setState({ data });
  }
  render() {
    console.log("form is here");
    return (
      <div
        className="position-absolute m-2 bg-primary"
        style={{ height: "95vh", width: "19rem" }}
      >
      
      </div>
    );
  }
}
