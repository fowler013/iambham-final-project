import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>


        <div class="home-page-container">
        <h1 id="featured-dishes">Featured Dishes!</h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide container"
          style={{height: "800px", margin: "0 auto"}}
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            <li data-target="#carouselExampleIndicators" data-slide-to="4" />
            <li data-target="#carouselExampleIndicators" data-slide-to="5" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://pioneerwoman.files.wordpress.com/2012/08/7771464864_07e1e3d994_z.jpg?w=630&h=419" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://api.norecipes.com/wp-content/uploads/2009/09/fish-veracruz-recipe-pescado-veracruzana.1024x1024.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="http://handsongourmet.com/wp-content/uploads/2012/08/HandsOnGourmet_maincourse.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="http://www.acropolispoint.com/wp-content/uploads/2016/07/point-a-restaurant-JSfood-6-1024x680.jpg" alt="Fourth slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://i.amz.mshcdn.com/usVe3ZNxKuIJFALuZ136W9tbLCU=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F471028%2F94cfb19f-f5d8-4263-beee-aa21826a7b3f.jpeg" alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://d3lawkbdj6aabd.cloudfront.net/singleplatform/image/upload/c_fit/4170f62f828bb389b46f8365a93cf54ec9133be3.jpg" alt="Sixth slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <h2>Todays Recipes</h2>

        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card rating This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="http://a57.foxnews.com/media2.foxnews.com/2016/06/09/640/360/060916_chew_crispychicken_1280.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="http://www.fnstatic.co.uk/images/content/package/100-middle-eastern-inspired-recipes-you-can-cook-at-home.jpeg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card rating This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        
        
        </div>
      
        
      </React.Fragment>
    );
  }
}

export default Home;

{
  /* <div className="card-deck">

          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=food-salad-healthy-46239.jpg&fm=jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card rating This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div> */
}
