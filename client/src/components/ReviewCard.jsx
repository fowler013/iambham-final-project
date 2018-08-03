import React, { Component } from 'react';
import * as ReviewService from '../services/reviews';

export default class ReviewCard extends Component {
    constructor() {
      super();

      this.state = {
        data: {
          reviewContainer: []
        }
      }
    }
    componentDidMount() {
        ReviewService.all().then((x) => {
            //this.state.reviewContainer
        })
    }

    render() {
        return (
            <div
                className="card card-cascade wider"
                style={{ marginTop: '3rem', width: '24rem', height: '30rem' }}
            >
                {/* <!-- Card image --> */}
                <div
                    className="view view-cascade gradient-card-header peach-gradient"
                    style={{ backgroundColor: '#fc724c' }}
                >
                    {/* <!-- Title --> */}
                    <h2 className="card-header-title mb-3">Reviews</h2>
                    {/* <!-- Text --> */}
                    <p className="mb-0">
                        <i className="fa fa-calendar mr-2" />26.07.2017
                    </p>
                </div>

                {/* <!-- Card content --> */}
                <div className="card-body card-body-cascade text-center">
                    {/* <!-- Text --> */}
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus, ex minis recusandae. Facere modi
                        sunt, quod quibusdam dignissimos neque rem nihil ratione
                        est placeat vel, natus non quos laudantium veritatis
                        sequi.Ut enim ad minima veniam, quis nostrum.
                    </p>
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
