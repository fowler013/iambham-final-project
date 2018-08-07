import React, { Component } from 'react';
import * as ReviewService from '../services/reviews';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default class ReviewCard extends Component {

postedSince(date) {
    let createdTime = Date.parse(date);
    console.log(createdTime)
    var nowTime = Date.parse(new Date);
    let howLong = moment.duration((nowTime - createdTime), "milliseconds").format("y [years], M [Months], w [weeks], d [days], h [hours], m [minutes], s [seconds]");
    return (howLong.split(',')[0])
}

reviewStar(num) {
let stars = [0,1,2,3,4,5]

return (
stars.map((element) => {

if (element === 0) {
    return
}
if (element <= num) {
    return (<React.Fragment><span style={{color: "gold"}}>★</span><span style={{marginLeft: "-1rem"}}>☆</span></React.Fragment>)
} else {
    return (<React.Fragment><span>☆</span></React.Fragment>)
}
})

)
}

    render() {
        return (
            <React.Fragment>
            <div className="d-flex justify-content-between align-items-center">
                <div className="card m-2 position-relative align-self-start d-flex align-items-center justify-content-center" style={{borderRadius: "50%", width: "10rem", height: "9rem"}}>
                    <div className="text-center">
                        <i className="fas fa-user" style={{fontSize: "3rem"}}></i>
                        <p className="mb-0">{this.props.username}</p>
                        <div className="rating">
                        {this.reviewStar(this.props.ratings)}
                        </div>
                    </div>
                </div>
                <div className="card my-3 text-center" style={{borderRadius: "50px", width: "100%"}}>
                    <div className="card-body d-flex justify-content-center align-items-between">
                        <div className="d-flex justify-content-center align-items-center mb-1">
                            <i className="fas fa-quote-left align-self-start"></i>
                            <p className="mb-0 mx-1">{this.props.review}</p>
                            <i className="fas fa-quote-right align-self-start"></i>
                        </div>
                    </div>
                    {this.postedSince(this.props.date)} ago
                </div>
            </div>
            </React.Fragment>
        )
    }
}
