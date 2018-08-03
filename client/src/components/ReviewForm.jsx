// import React from "react";
// import { render } from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   NavLink
// } from "react-router-dom";

// class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);


//     this.state = {
//       rating: '',
//       review: ''
//     };
//     this.handleRatingChange = this.handleRatingChange.bind(this);
//     this.handleReviewChange = this.handleReviewChange.bind(this);
   
//   };


//   handleRatingChange(e) {

//     this.setState({ rating: e.target.value });
//   }

//   handleReviewChange(e) {
//     this.setState({ review: e.target.value });
//   }

  



//   componentDidMount() {
//     this.getUserReviews();
//     this.getUserReview();
//   }

  

//   getUserReview() {
//     fetch(`/api/review/${this.props.match.params.id}`)
//       .then((res) => {
//         return res.json()
//       }).then((user) => {
//         this.setState({
//           user: user
//         });
//       }).catch((err) => {
//         console.log(err);
//       });
//   }

//   updateUser() {
//     fetch(`/api/user/${this.props.match.params.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         firstname: this.state.firstName,
//         lastname: this.state.lastName,
//         email: this.state.email,
//         username: this.state.userName
//       })
//     })
//       .then((res) => res.json())
//       // .then(() => {
//       //   this.setState({
//       //     user: post
//       //   });
//       // })
//       .catch((err) => {
//         console.log(err);
//       });
//   }


// render(){
//     return(
//         sa
//     )
// }

// }
// export default ReviewForm