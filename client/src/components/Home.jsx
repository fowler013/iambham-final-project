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
        <div id="home-header">
          <h1 className="featured-dishes">Recipes!</h1>
        </div>
        <div id="home-sub-header">
          <h4 className="h4-sub-header">
            Quickly browse thousands of curated recipes for any occasion.
          </h4>
          <h5 className="h5-sub-header">
            Create an account to leave reviews and save your favorites!
          </h5>
        </div>
        <div className="home-page-container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide container"
            style={{ height: "800px", margin: "0 auto" }}
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
                <div className="overlay">
                  <p>Shrimp Scampi</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://www.thehungryhutch.com/wp-content/uploads/2017/06/Shrimp-Scampi-Pasta-2.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block" />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <p>Quinoa and Grilled Chicken Salad</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://media.self.com/photos/5a09d363007f5b5ea694477d/4:3/w_728,c_limit/0717-peachy-quinoa-salad-grilled-chicken-lg.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <p>Steak Carpaccio Salad</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://www.seriouseats.com/recipes/images/2016/06/20160628-steak-carpaccio-salad-recipe-2-1500x1125.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <p>Salmon Teriyaki</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2015/05/31405_teriyaki_salmon.jpg"
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <p>Chicken Piccata</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2017/09/main/chicken-piccata-1711p28.jpg?itok=Uqti5qkn"
                  alt="Fifth slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <p>Pizza Margherita</p>
                </div>
                <img
                  className="d-block w-100"
                  src="https://www.saveur.com/sites/saveur.com/files/styles/1000_1x_/public/images/2015/11/pizza-margherita_2000x1500_toddcoleman.jpg?itok=pnZak_tw"
                  alt="Sixth slide"
                />
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
          <div id="todays-recipes-container">
            <h2 id="todays-recipes" style={{ padding: "35px" }}>
              Today's Recipes
            </h2>

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
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
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
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
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
                    This is a wider card rating This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
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
