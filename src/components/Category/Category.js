import React from "react";
import "./Category.css";
import women_category from "../../images/women_category.jpg";
import men_category from "../../images/men_category.jpg";
import jewellery_category from "../../images/jewelley_category.jpg";
import electronics_category from "../../images/electronics_category.jpg";

const Category = () => {
  return (
    <section className="container">

      <div className="d-flex justify-content-center" style={{margin:"50px 0px 30px 0px"}}>
        <div className="titleLine align-self-center"></div>
        <h3>Shop By Category</h3>
        <div className="titleLine align-self-center"></div>
      </div>

      <div className="row category">
        <div className="col-md-8 d-flex">
          <div className="col-md-6 men">
            <img src={men_category} alt="" width="100%" height="100%" />
            <button
              onClick={() => console.log("Men Category Click")}
              className="women-men-btn"
            >
              Men
            </button>
          </div>

          <div className="col-md-6">
            <div className="mb-4">
              <img src={jewellery_category} alt="" width="100%" />
              <button
                onClick={() => console.log("Jewellery Category Click")}
                className="jewellery-btn"
              >
                Jewellery
              </button>
            </div>

            <div className="mt-4">
              <img src={electronics_category} alt="" width="100%" />
              <button
                onClick={() => console.log("Electronics Category Click")}
                className="electronics-btn"
              >
                Electronics
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 women">
          <img
            src={women_category}
            alt="Not Found"
            width="100%"
            height="100%"
          />
          <button
            onClick={() => console.log("Women Category Click")}
            className="women-men-btn"
          >
            Women
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
