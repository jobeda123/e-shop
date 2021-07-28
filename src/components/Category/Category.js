import React from "react";
import "./Category.css";
import { useHistory } from "react-router-dom";
import women_category from "../../images/women_category.jpg";
import men_category from "../../images/men_category.jpg";
import jewellery_category from "../../images/jewelley_category.jpg";
import electronics_category from "../../images/electronics_category.jpg";


const Category = () => {
  let history = useHistory();

  return (
    <section className="container">
      
      {/* title */}
      <div
        className="d-flex justify-content-center"
        style={{ margin: "50px 0px 30px 0px" }}
      >
        <h3 id="sectionName">Shop By Category</h3>
      </div>

      {/* picture by category */}
      <div className="row category">
        <div className="col-md-8 d-flex mb-3">
          {/* Men Category Pic */}
          <div className="col-md-6">
            <img src={men_category} alt="" width="100%" height="100%" />
            <button
              onClick={() => {
                history.push("/category/men");
              }}
              className="women-men-btn"
              id="women-men-btn"
            >
              Men
            </button>
          </div>

          {/* Jewellery and Electronics Category Pic */}
          <div className="col-md-6">
            <div className="mb-3">
              <img src={jewellery_category} alt="" width="100%" />
              <button
                onClick={() => {
                  history.push("/category/jewellery");
                }}
                className="jewellery-btn"
                id="jewellery-btn"
              >
                Jewellery
              </button>
            </div>

            <div className="">
              <img src={electronics_category} alt="" width="100%" />
              <button
                onClick={() => {
                  history.push("/category/electronics");
                }}
                className="electronics-btn"
                id="electronics-btn"
              >
                Electronics
              </button>
            </div>
          </div>
        </div>

        {/* Women Category Pic */}
        <div className="col-md-4 col-sm-12 px-4 pb-3">
          <img
            src={women_category}
            alt="Not Found"
            width="100%"
            height="100%"
          />
          <button
            onClick={() => {
              history.push("/category/women");
            }}
            className="women-men-btn"
            id="women-men-btn"
          >
            Women
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
