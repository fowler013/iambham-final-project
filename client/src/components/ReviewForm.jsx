import React, { Component } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid black',
      width: '50em'
    }
};

export default class ReviewForm extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            data: {
                recipe: '',
                ratings: '',
                review: '',
            },
        }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {}
    // MODAL METHODS ****
  openModal() {
    this.setState({ modalIsOpen: true });
  };
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  };
  closeModal() {
    this.setState({ modalIsOpen: false });
  };
    render() {
        return (
            <div className="modal-container">
                <span><button className="btn btn-outline-light" type="button" style={{ float: 'right' }}>Add Review for this Recipe</button></span>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 className="modal-header" ref={subtitle => this.subtitle = subtitle}>Movie Editor:</h2>
                  <form>
                    <div className="form-group">
                      <label className="form-label-director" htmlFor="exampleFormControlInput1">Movie Director</label>
                      <input className="form-control" id="exampleFormControlInput1" placeholder='Edit movie director' onChange={(e) => {
                        this.handleDirectorChange(e.target.value)
                      }} name="director" />
                    </div>
                    <div className="form-group">
                      <label className="form-label-poster" htmlFor="exampleFormControlInput2">Movie Poster (url)</label>
                      <input className="form-control" id="exampleFormControlInput2" placeholder='Edit poster image address' onChange={(e) => {
                        this.handlePosterChange(e.target.value)
                      }} name="poster" />
                    </div>
                    <div className="form-group">
                      <label className="form-label-title" htmlFor="exampleFormControlInput3">Movie Title</label>
                      <input className="form-control" id="exampleFormControlInput3" placeholder='Edit movie title' onChange={(e) => {
                        this.handleTitleChange(e.target.value)
                      }} name="title" />
                      <a href={`localhost:3000/${this.props.match.params.id}`} className="modal-submit-btn" onClick={() => {
                        this.handleMovieUpdate()
                      }}>Submit</a>
                    </div>
                  </form>
                </Modal>
            </div>
            <form>
                <div className="form-group">
                    <label for="exampleInputRecipe1">Recipe</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
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
                    <label className="form-check-label" for="inlineRadio2">
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
                    <label className="form-check-label" for="inlineRadio3">
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
                    <label className="form-check-label" for="inlineRadio4">
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
                    <label className="form-check-label" for="inlineRadio5">
                        5
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}
