import React from 'react';
import { Link } from 'react-router-dom';

//these are the cards that on the home page!

const Reviews = (props) => {
    return (
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Username</h5>
            <p className="card-text">rating</p>
            <p className="card-text">reviews</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
        
    );
};

export default Reviews;