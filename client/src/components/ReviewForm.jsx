import React, { Component } from 'react';
import Modal from 'react-modal';
import './styles/modal.css';
import * as ReviewsServices from '../services/reviews';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid black',
        width: '50em',
    },
};


export default class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            data: {
                recipeid: this.props.recipeid,
                ratings: '',
                review: '',
            },
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // CONTENT CHANGING FUNCTIONS
    handleContentChange(review) {
        let data = Object.assign({}, this.state.data, { review });
        this.setState({ data });
    };
    //handlePosterChange(poster) {
    //    let data = Object.assign({}, this.state.data, { poster });
    //    this.setState({ data });
    //};
    //handleTitleChange(title) {
    //    let data = Object.assign({}, this.state.data, { title });
    //    this.setState({ data });
    //};
    handleReviewSubmit() {
        console.log('clicked');
        let { recipeid, review, ratings } = this.state.data
        ReviewsServices.create(recipeid, review, ratings).then((x) => {
            console.log(x)
        })
    }
    // MODAL METHODS ****
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <div className="modal-container">
                <button
                    className="btn btn-outline-light"
                    type="button"
                    style={{ float: 'right' }}
                    onClick={() => {
                        this.openModal();
                    }}
                >
                    Add Review for this Recipe
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2
                        className="modal-header bg-primary"
                        ref={(subtitle) => (this.subtitle = subtitle)}
                    >
                        {this.props.recipe}
                    </h2>
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
                                    this.handleContentChange(e.target.value);
                                }}
                                name="content"
                            />
                        </div>
                        <div className="ratings">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
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
                                    value="option2"
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
                                    value="option3"
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
                                    value="option4"
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
                                    value="option5"
                                />
                                <label
                                    className="form-check-label"
                                    for="inlineRadio5"
                                >
                                    5
                                </label>
                            </div>
                        </div>
                        <a
                            className="modal-submit-btn"
                            onClick={() => {
                                this.handleReviewSubmit();
                            }}
                        >
                            Submit
                        </a>
                    </form>
                </Modal>
            </div>
        );
    }
}
