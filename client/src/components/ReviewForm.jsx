import React, { Component } from 'react';

export default class ReviewForm extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                recipe: '',
                ratings: '',
                review: '',
            },
        };
    }
    componentDidMount() {}
    render() {
        return (
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
