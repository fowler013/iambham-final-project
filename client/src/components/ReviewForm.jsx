import React, { Component } from 'react';
import Modal from 'react-modal';
import * as ReviewsServices from '../services/reviews';
import { findDOMNode } from 'react-dom';

export default class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                userid: 2,
                recipeid: this.props.recipeid,
                ratings: '',
                review: '',
            },
        };
    }
    // CONTENT CHANGING FUNCTIONS
    handleContentChange(review) {
        let data = Object.assign({}, this.state.data, { review });
        this.setState({ data });
    }
    handleRatingChange(ratings) {
        let data = Object.assign({}, this.state.data, { ratings });
        this.setState({ data });
    }
    handleReviewSubmit() {
        let newItem = this.state.data;
        //let { recipeid, userid, review, ratings } = this.state.data;
        //console.log(recipeid);
        //console.log(review);
        //console.log(userid);
        //console.log(ratings);
        //ReviewsServices.create(this.state.data);
        //location.reload();

        ReviewsServices.create(this.state.data).then((idObj) => {
            console.log(idObj);
            const el = findDOMNode(this.refs.mod);
            $(el).modal('hide');

            // return this.setState({
            //   data: [...this.state.data, newItem ]
            // })
            this.props.onChange(Object.assign({}, newItem, idObj));
            //return this.setState({
            //    data: [
            //        ...this.state.data,
            //        Object.assign({}, addItem, {
            //            id: idObj.id,
            //            categoryname,
            //        }),
            //    ],
            //});
        });
    }
    render() {
        return (
            <div className="modal-container">
                <button
                    type="button"
                    className="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Add Review for this Recipe
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    ref="mod"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                    style={{ color: 'black' }}
                                >
                                    {this.props.recipe}
                                </h5>

                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div
                                className="modal-body"
                                style={{ color: 'black' }}
                            >
                                <form action="/" method="POST">
                                    <div className="form-group">
                                        <label
                                            className="form-label-content"
                                            htmlFor="exampleFormControlInput1"
                                        >
                                            Review Content
                                        </label>
                                        <input
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Enter your review here!"
                                            onChange={(e) => {
                                                this.handleContentChange(
                                                    e.target.value,
                                                );
                                            }}
                                            name="content"
                                        />
                                    </div>
                                    <p>
                                        <span className="star-symbol">
                                            &#9733;
                                        </span>{' '}
                                        Recipe Rating{' '}
                                        <span className="star-symbol">
                                            &#9733;
                                        </span>
                                    </p>
                                    <div className="ratings">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio0"
                                                value="0"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio4"
                                            >
                                                0
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio1"
                                                value="1"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio1"
                                            >
                                                1
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio2"
                                                value="2"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio2"
                                            >
                                                2
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio3"
                                                value="3"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio3"
                                            >
                                                3
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio4"
                                                value="4"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio4"
                                            >
                                                4
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio5"
                                                value="5"
                                                onChange={(e) => {
                                                    this.handleRatingChange(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                for="inlineRadio5"
                                            >
                                                5
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.handleReviewSubmit();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
