import React, { Component } from 'react';
import Diets from './diets';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        // change these *****
        items: '',
        exclusions: ''
      }
    }
  }
  handleBlogSubmit() {
    // POST
    let url = '/api/search/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      headers: { "Content-Type": "application/json" }

    }).then((res) => {
      console.log(res.json())
      //return res.json();
    }).catch((err) => {
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
    return (
      <div className="form-container">
        <form className="form" action="/" method="POST">
          <div className="form-group">
            <label className="form-label-content" htmlFor="exampleFormControlInput1">Food Item</label>
            <input className="form-control" id="exampleFormControlInput1" placeholder='Enter food item!' onChange={(e) => {
              this.handleItemsChange(e.target.value)
            }} name="items" />
          </div>
          <div className="form-group">
            <label className="form-label-content" htmlFor="exampleFormControlInput2">Exclusions</label>
            <input className="form-control" id="exampleFormControlInput2" placeholder='Enter any food exclusions!' onChange={(e) => {
              this.handleExclusionsChange(e.target.value)
            }} name="content" />
          </div>
          <Diets />
          <button className="form-btn" onClick={() => {
            this.handleBlogSubmit()
          }}>Submit</button>

        </form>
      </div>
    )
  }
};