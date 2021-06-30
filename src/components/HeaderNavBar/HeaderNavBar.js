import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";
import pic from "../../images/jewellery.png";
import "./HeaderNavBar.css";

// for category icon
import men from "../../images/men.png";
import women from "../../images/women.png";
import jewellery from "../../images/jewellery.png";
import electronics from "../../images/electronics.png";

const Header = () => {
  const [addToCart, setAddToCart] = useState({});
  const pics = [
    { name: women },
    { name: men },
    { name: jewellery },
    { name: electronics },
  ];

  console.log(addToCart);

  return (
    <>
      <nav className="sticky-top">
        <ul>
          <li className="col-md-2">
            <div className="d-flex justify-content-around">
              <button
                className="navbar-light navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                style={{ backgroundColor: "#EBB5AC", color: "#f2f2f2" }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <h4 className="logo">eShop</h4>
            </div>
          </li>

          <li className="search-icon col-md-8 d-flex justify-content-center">
            <input type="search" placeholder="Search" />
            <label className="icon">
              <span>
                <FontAwesomeIcon className="icon" icon={faSearch} size="3x" />
              </span>
            </label>
          </li>

          <li class="col-md-2 user-cart-icon d-flex justify-content-evenly">
            <button type="button" class="position-relative">
              <FontAwesomeIcon icon={faUser} size="2x" />
            </button>

            <button type="button" class="position-relative">
              <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
              <span
                class="position-absolute top-0 translate-middle badge rounded-pill"
                style={{ backgroundColor: "#EBB5AC", color: "white", fontSize:"17px", marginTop:"5px" }}
              >
                {addToCart.length ===undefined ? 0: addToCart.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <div
        class="offcanvas offcanvas-start canvasWidth"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="offcanvasExampleLabel">
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
          <div class="canvasArea">
            <a className="categoryIcon d-block d-flex justify-content-start" href="#">
              <img src={women} alt="" /> <span className="px-2">Women</span>
            </a>
            
            <a className="categoryIcon d-block d-flex justify-content-start" href="#">
              <img src={men} alt="" /> <span className="px-2">Men</span>
            </a>
            
            <a className="categoryIcon d-block d-flex justify-content-start" href="#">
              <img src={jewellery} alt="" /> <span className="px-2">Jewellery</span>
            </a>
            
            <a className="categoryIcon d-block d-flex justify-content-start" href="#">
              <img src={electronics} alt="" /> <span className="px-2">Electronics</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
