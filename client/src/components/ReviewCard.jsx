import React, { Component } from 'react';
import * as ReviewService from '../services/reviews';

export default class ReviewCard extends Component {
    constructor() {
        super();

        //this.state = {
        //    reviewContainer: [],
        //};
    }
    //componentDidMount() {
    //    ReviewService.all().then((reviews) => {
    //        Object.values(reviews).forEach((review) => {
    //            console.log(review);
    //            this.setState({
    //                reviewContainer: [...this.state.reviewContainer, review],
    //            });
    //        });
    //    });
    //}

    render() {
        return (
          <div
          className="card card-cascade wider"

      >
          {/* <!-- Card image --> */}
          <div
              className="view view-cascade gradient-card-header peach-gradient"
              style={{ backgroundColor: '#fc724c' }}
          >
              {/* <!-- Title --> */}
              <h2 className="card-header-title mb-3">
                  {this.props.username}
              </h2>
              {/* <!-- Text --> */}
              <p className="mb-0">
                  <i className="fa fa-calendar mr-2" />{this.props.date}
              </p>
          </div>
          {/* <!-- Card content --> */}
          <div className="card-body card-body-cascade text-center">
              {/* <!-- Text --> */}
              <h6>{this.props.ratings}/5</h6>
              <p className="card-text">{this.props.review}</p>
              {/* <!-- Link --> */}
              <a
                  href="#!"
                  className="orange-text d-flex flex-row-reverse p-2"
              >
                  <h5 className="waves-effect waves-light">
                      Read more<i className="fa fa-angle-double-right ml-2" />
                  </h5>
              </a>
          </div>
      </div>
        );
    }
}
