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
            id="carouselExampleIndicator1"
            className="carousel slide container"
            style={{ height: "800px", margin: "0 auto" }}
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
          <div
            id="todays-recipes-container"
            style={{
              backgroundColor: "green",
              marginTop: "40px",
              marginBottom: "40px"
            }}
          >
            <h2
              id="todays-recipes"
              style={{ padding: "100px", color: "white", marginTop: "70px" }}
            >
              Browse our most popular searches.
            </h2>
          </div>

          {/* Photo Links */}

          <div id="popular-links1" style={{ margin: "20px" }}>
            <div
              id="link-container-1"
              style={{ marginBottom: "80px", marginTop: "80px" }}
            >
              <div className="row">
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=cheese">
                    <div class="card">
                      <div className="overlay">
                        <p>Cheese Recipes</p>
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

                <div className="col">
                  <a href="http://localhost:3000/search/keyword=chicken">
                    <div class="card">
                      <div className="overlay">
                        <p>Chicken Recipes</p>
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
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=beef">
                    {" "}
                    <div class="card">
                      <div className="overlay">
                        <p>Beef Recipes</p>
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
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=salad">
                    <div class="card">
                      <div className="overlay">
                        <p>Salad Recipes</p>
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

                <div className="col">
                  <a href="http://localhost:3000/search/keyword=vegetarian">
                    <div class="card">
                      <div className="overlay">
                        <p>Vegetarian Recipes</p>
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
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=rice">
                    {" "}
                    <div class="card">
                      <div className="overlay">
                        <p>Rice & Grain Recipes</p>
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
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=chocolate">
                    <div class="card">
                      <div className="overlay">
                        <p>Chocolate Recipes</p>
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

                <div className="col">
                  <a href="http://localhost:3000/search/keyword=fish">
                    <div class="card">
                      <div className="overlay">
                        <p>Fish Recipes</p>
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
                <div className="col">
                  <a href="http://localhost:3000/search/keyword=egg">
                    {" "}
                    <div class="card">
                      <div className="overlay">
                        <p>Egg Recipes</p>
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
          style={{ padding: "300px", backgroundColor: "gray", margin: "0" }}
          
        />
      </React.Fragment>
    );
  }
}

export default Home;
