import React, { Component } from 'react';
import Modal from 'react-modal';
import * as ReviewsServices from '../services/reviews';

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
        let { recipeid, userid, review, ratings } = this.state.data;
        console.log(recipeid);
        console.log(review);
        console.log(userid);
        console.log(ratings);
        ReviewsServices.create(this.state.data);
        location.reload();
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
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'black' }}>
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
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
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
