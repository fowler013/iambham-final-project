import React, { Component } from 'react';
import * as ReviewService from '../services/reviews';
import './styles/ReviewCard.css';

export default class ReviewCard extends Component {
    render() {
        return (
            <div
                className="flip-container"
                ontouchstart="this.classList.toggle('hover');"
                style={{ height: '200px' }}
            >
                <div className="flipper">
                    <div className="front">
                        {/*<!-- front content -->*/}
                        <div className="ipl-ratings-bar">
                            <span className="rating-other-user-rating">
                                <span className="star-symbol">&#9733;</span>
                                <span>{this.props.ratings}</span>
                                {/*<span className="point-scale">/5</span>*/}
                            </span>
                        </div>
                        <h4>{this.props.username}</h4>
                    </div>
                    <div className="back">
                        {/*<!-- back content -->*/}
                        <p className="mb-0">
                            <i className="fa fa-calendar mr-2" />
                            {this.props.date}
                        </p>
                        <p className="card-text" style={{ padding: '8px', color: 'black' }}>{this.props.review}</p>
                    </div>
                </div>
            </div>
        );
    }
}

//<div className="card card-cascade wider">
//                {/* <!-- Card image --> */}
//                <div
//                    className="view view-cascade gradient-card-header peach-gradient"
//                    id="review-card"
//                    style={{ backgroundColor: '#f80' }}
//                >
//                    {/* <!-- Title --> */}
//                    <h2
//                        className="card-header-title mb-3"
//                        style={{ marginLeft: '10px' }}
//                    >
//                        {this.props.username}
//                    </h2>
//                    {/* <!-- Text --> */}
//                    <p className="mb-0">
//                        <i className="fa fa-calendar mr-2" />
//                        {this.props.date}
//                    </p>
//                </div>
//                {/* <!-- Card content --> */}
//                <div className="card-body card-body-cascade text-center">
//                    {/* <!-- Text --> */}
//                    <div className="ipl-ratings-bar">
//                        <span className="rating-other-user-rating">
//                            <span className="star-symbol">&#9733;</span>
//                            <span>{this.props.ratings}</span>
//                            <span className="point-scale">/5</span>
//                        </span>
//                    </div>
//                    <p className="card-text">{this.props.review}</p>
//                    {/* <!-- Link --> */}
//                    <a
//                        href="#!"
//                        className="orange-text d-flex flex-row-reverse p-2"
//                    >
//                        <h5 className="waves-effect waves-light">
//                            Read more<i className="fa fa-angle-double-right ml-2" />
//                        </h5>
//                    </a>
//                </div>
//            </div>
