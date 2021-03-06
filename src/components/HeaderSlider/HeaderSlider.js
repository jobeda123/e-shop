import React from "react";
import "./HeaderSlider.css";
// static pictures
import slider_3 from "../../images/slider_3.jpg";
import { useHistory } from "react-router-dom";
import slider_2 from "../../images/slider_back.jpg";
import slider_1 from "../../images/1.jpg";


const HeaderSlider = () => {
  let history = useHistory();
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src={slider_1} class="d-block w-100 fluid" alt="..." />
            <div class="carousel-caption d-md-block sliderCaptionLeft">
              <p>NEW SEASON</p>
              <h5>Lookbook Collection</h5>
              <div>
                <button onClick={() => history.push("/latestCollection")}>
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src={slider_2} class="d-block w-100 fluid" alt="..." />
            <div class="carousel-caption d-md-block sliderCaptionRight">
              <p>SUMMER 2021</p>
              <h5>New Arrival Collection</h5>

              <div>
                <button onClick={() => history.push("/latestCollection")}>
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src={slider_3} class="d-block w-100 fluid" alt="..." />
            <div class="carousel-caption d-md-block sliderCaptionLeft">
              <p>SUMMER SALE</p>
              <h5>Save up to 30%</h5>
              <div>
                <button
                  onClick={() => history.push("/flashSale")}
                  class="sliderBtnLeft"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeaderSlider;
