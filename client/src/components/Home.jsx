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
        <div id="headers">
          <div id="home-header">
            <h1 className="featured-dishes">Title</h1>
          </div>
          <div id="home-sub-header">
            <h4 className="h4-sub-header">
              Sub-Header Title
            </h4>
            <h5 className="h5-sub-header">
            Sub-header Text
            </h5>
          </div>
        </div>
        <div className="home-page-container">
          <div className="featured-recipe-container" style={{textAlign: "center", paddingTop: "40px", opacity: "1"}}>
            <h2 className="featured-recipes" style={{color: "black", fontWeight:"800", fontSize: "600%"}}>Featured Dishes of the Day</h2>
          </div>
          <div style={{padding: "80px"}}></div>
          <div
            id="carouselExampleIndicator1"
            className="carousel slide container"
            style={{ height: "800px", margin: "0 auto", paddingTop: "80px"}}
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicator1"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicator1" data-slide-to="1" />
              <li data-target="#carouselExampleIndicator1" data-slide-to="2" />
              <li data-target="#carouselExampleIndicator1" data-slide-to="3" />
              <li data-target="#carouselExampleIndicator1" data-slide-to="4" />
              <li data-target="#carouselExampleIndicator1" data-slide-to="5" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="overlay">
                  <a href="http://localhost:3000/recipe/55e11aa290643824991f857b4e5ba0fe">
                    <button type="button" className="btn btn-light">Shrimp Scampi</button>
                  </a>
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
                  <a href="http://localhost:3000/recipe/518d4ca5057fcc2a33410a6361e881de">
                  <button type="button" className="btn btn-light">Parsley Quinoa Salad</button>
                  </a>
                </div>
                <img
                  className="d-block w-100"
                  src="http://www.staceydeering.com/wp-content/uploads/2014/03/Quinoa-Salad.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <a href="http://localhost:3000/recipe/5a84c050004ab90f4fb95242af2a3709">
                  <button type="button" className="btn btn-light">Steak Carpaccio</button>
                  </a>
                </div>
                <img
                  className="d-block w-100"
                  src="https://www.seriouseats.com/recipes/images/2016/06/20160628-steak-carpaccio-salad-recipe-2-1500x1125.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <div className="overlay">
                  <a href="http://localhost:3000/recipe/370599c0617d40cb88df553fdd48b04e">
                  <button type="button" className="btn btn-light">Salmon Teriyaki</button>
                  </a>
                </div>
                <img
                  className="d-block w-100"
                  src="https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2015/05/31405_teriyaki_salmon.jpg"
                  alt="Fourth slide"
                />
              </div>

              <div className="carousel-item">
                <div className="overlay">
                  <a href="http://localhost:3000/recipe/145d799511a88c11b7d05119e522b36e">
                  <button type="button" className="btn btn-light">Chicken Piccata</button>
                  </a>
                </div>
                <img
                  className="d-block w-100"
                  src="https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2017/09/main/chicken-piccata-1711p28.jpg?itok=Uqti5qkn"
                  alt="Fifth slide"
                />
              </div>

              <div className="carousel-item">
                <div className="overlay">
                  <a href="http://localhost:3000/recipe/a48ba99bcb994261789daedde6d1c6c1">
                  <button type="button" className="btn btn-light">Pizza Margherita</button>
                  </a>
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
              href="#carouselExampleIndicator1"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicator1"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div style={{padding: "80px"}}></div>
          <div
            id="todays-recipes-container"
            style={{
              
              marginTop: "40px",
              marginBottom: "40px",
              
               opacity: "0.8"
            }}
          >
            <h1
              id="todays-recipes"
              style={{ color: "black", marginTop: "70px", fontWeight:"800", fontSize: "600%"}}
            >
              Browse our most popular searches.
            </h1>
          </div>

          {/* Photo Links */}

          <div
            id="popular-links1"
            style={{
              paddingBottom: "220px",
              paddingTop: "80px",
              paddingLeft: "220px",
              paddingRight: "220px"
            }}
          >
            <div
              id="link-container-1"
              style={{ marginBottom: "80px", marginTop: "80px" }}
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=cheese">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Cheese Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="https://www.thecheesesociety.co.uk/wp-content/uploads/2016/10/GOURMET-PACK-SQUARE-AMENDED-CRACKERS.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=chicken">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Chicken Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i66.tinypic.com/2hmeq81.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=beef">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Beef Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="https://cdn.shopify.com/s/files/1/1844/0771/products/7c7f523e01837fedbaf535206cd360ac_1280x1280.jpg?v=1511148851"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="link-container-1"
              style={{ marginBottom: "80px", marginTop: "80px" }}
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=salad">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Salad Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i65.tinypic.com/j67w2b.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=vegetarian">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Vegetarian Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i66.tinypic.com/2r2unmd.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=rice">
                    {" "}
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Rice & Grain Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i65.tinypic.com/5ue1xi.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="link-container-1"
              style={{ marginBottom: "80px", marginTop: "80px" }}
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=chocolate">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Chocolate Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i68.tinypic.com/mjpueu.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=fish">
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Fish Recipe</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i64.tinypic.com/34hh2mx.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="http://localhost:3000/search/keyword=egg">
                    {" "}
                    <div id="homecard" className="card">
                      <div className="overlay">
                      <button type="button" className="btn btn-light">Egg Recipes</button>
                      </div>
                      <img
                        id="home-image-links"
                        className="card-img-top"
                        src="http://i63.tinypic.com/2469xro.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="homepage-footer"
          style={{ padding: "40px", margin: "0" }}
          className="row"
        >
          <div className="col" style={{ textAlign: "center" }}>
            <h3
              className="homepage-h3"
              style={{
                fontWeight: "500",
                paddingBottom: "70px",
                color: "black"
              }}
            >
              Follow Us !
            </h3>
            <div className="media-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/?hl=en"
                className="fa fa-instagram"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                className="fa fa-facebook"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/"
                className="fa fa-twitter"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://plus.google.com/discover"
                className="fa fa-google"
              />
            </div>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h3
              className="homepage-h3"
              style={{
                fontWeight: "500",
                paddingBottom: "40px",
                color: "black"
              }}
            >
              Contact Us !
            </h3>
            <p className="contact-text">
              {" "}
              <span style={{ textDecoration: "underline", fontWeight: "400" }}>
                Address
              </span>{" "}
              <br /> 1500 1st Ave N, Birmingham, AL 35203
            </p>
            <p className="contact-text">
              {" "}
              <span style={{ textDecoration: "underline", fontWeight: "400" }}>
                Phone Number
              </span>{" "}
              <br /> (205)-555-5555{" "}
            </p>
            <p className="contact-text">
              {" "}
              <span style={{ textDecoration: "underline", fontWeight: "400" }}>
                E-Mail
              </span>{" "}
              <br /> email@email.com{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
