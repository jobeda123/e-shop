import React from "react";
// for category icon
import men from "../../images/men.png";
import women from "../../images/women.png";
import jewellery from "../../images/jewellery.png";
import electronics from "../../images/electronics.png";
import './CategoryDrawer.css';


const CategoryDrawer = () => {
  return (
    <div
      class="offcanvas offcanvas-start categoryCanvasWidth"
      tabindex="-1"
      id="offcanvasCategory"
      aria-labelledby="offcanvasCategoryLabel"
    >
      <div class="offcanvas-header">
        <h4 class="offcanvas-title" id="offcanvasCategoryLabel">
          Category
        </h4>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <button
            className="categoryIcon d-block d-flex justify-content-start"
            onClick={() => console.log("Women category icon click")}
          >
            <img src={women} alt="" /> <span className="px-2">Women</span>
          </button>

          <button
            className="categoryIcon d-block d-flex justify-content-start"
            onClick={() => console.log("Men category icon click")}
          >
            <img src={men} alt="" /> <span className="px-2">Men</span>
          </button>

          <button
            className="categoryIcon d-block d-flex justify-content-start"
            onClick={() => console.log("Jewellery category icon click")}
          >
            <img src={jewellery} alt="" />
            <span className="px-2">Jewellery</span>
          </button>

          <button
            className="categoryIcon d-block d-flex justify-content-start"
            onClick={() => console.log("Electronics category icon click")}
          >
            <img src={electronics} alt="" />
            <span className="px-2">Electronics</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDrawer;
