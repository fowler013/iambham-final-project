import React, { Component } from 'react';
import Diets from './diets';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        // change these *****
        title: '',
        content: ''
      }
    }
  }
  handleBlogSubmit() {
    // POST Blogs
    let url = '';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      headers: { "Content-Type": "application/json" }

    }).then((res) => {
      return res.json();
    }).catch((err) => {
      console.log(err);
    });
  }
  handleTitleChange(title) {
    // change these ***** ALSO NAME
    let data = Object.assign({}, this.state.data, { title });
    this.setState({ data });
  }
  handleContentChange(content) {
    // change these ***** ALSO NAME
    let data = Object.assign({}, this.state.data, { content });
    this.setState({ data });
  }
  render() {
    return (
      <div className="form-container">
        <form className="blog-form" action="/" method="POST" className="blog-form">
          <div className="form-group">
            <label className="form-label-content" htmlFor="exampleFormControlInput1">Content Type</label>
            <input className="form-control" id="exampleFormControlInput1" placeholder='Placeholder!' onChange={(e) => {
              this.handleTitleChange(e.target.value)
            }} name="title" />
          </div>
          <div className="form-group">
            <label className="form-label-content" htmlFor="exampleFormControlTextarea1">Content Type</label>
            <input className="form-control" id="exampleFormControlTextarea1" placeholder='Placeholder!' onChange={(e) => {
              this.handleContentChange(e.target.value)
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