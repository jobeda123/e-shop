import React from "react";
import "./Category.css";
import { useHistory } from "react-router-dom";
import women_category from "../../images/women_category.jpg";
import men_category from "../../images/men_category.jpg";
import jewellery_category from "../../images/jewellery_category.jpg";
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

        <div className="col-md-3 col-sm-6">
          <img className="fluid picResponsive" src={women_category} alt="" width="100%" height="100%"/>
          <button
            onClick={() => {
              history.push("/category/women");
            }}
            className="common-btn"
          >
            Women
          </button>
        </div>

        <div className="col-md-3 col-sm-6">
          <img className="fluid picResponsive" src={men_category} alt="" width="100%" height="100%"/>
          <button
            onClick={() => {
              history.push("/category/men");
            }}
            className="men-btn"
          >
            Men
          </button>
        </div>
        <div className="col-md-3 col-sm-6">
          <img className="fluid picResponsive" src={jewellery_category} alt="" width="100%" height="100%"/>
          <button
            onClick={() => {
              history.push("/category/jewellery");
            }}
            className="common-btn"
          >
            Jewellery
          </button>
        </div>
        <div className="col-md-3 col-sm-6">
          <img className="fluid picResponsive" src={electronics_category} alt="" width="100%" height="100%"/>
          <button
            onClick={() => {
              history.push("/category/electronics");
            }}
            className="common-btn"
          >
            Electronics
          </button>
        </div>
      </div>

    </section>
  );
};

export default Category;
