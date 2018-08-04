import React, { Component } from 'react';
import Modal from 'react-modal';
import './styles/modal.css';

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
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            data: {
                recipeid: '',
                ratings: '',
                review: '',
            },
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {}
    // CONTENT CHANGING FUNCTIONS
    handleDirectorChange(director) {
        let data = Object.assign({}, this.state.data, { director });
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
                    <form>
                        <div className="form-group">
                            <label
                                className="form-label-director"
                                htmlFor="exampleFormControlInput1"
                            >
                                Movie Director
                            </label>
                            <input
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Edit movie director"
                                onChange={(e) => {
                                    this.handleDirectorChange(e.target.value);
                                }}
                                name="director"
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
                                this.handleMovieUpdate();
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
