import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import "./HeaderNavBar.css";
import { useContext } from "react";
import { UserContext } from "../../App";
import CategoryDrawer from "../CategoryDrawer/CategoryDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import UserDrawer from "../UserDrawer/UserDrawer";


const Header = () => {
  // for get cart item from local storage
  const [addCart, setAddCart] = useContext(UserContext);
  const myArray = localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

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
                data-bs-target="#offcanvasCategory"
                aria-controls="offcanvasCategory"
                style={{ backgroundColor: "rgb(218, 87, 109)", color: "#f2f2f2" }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <h4 className="logo">eShop</h4>
            </div>
          </li>

          <li className="search-icon col-md-8 d-flex justify-content-center">
            <input type="search" placeholder="Search" />
            <label>
              <span>
                <FontAwesomeIcon className="icon" icon={faSearch} size="3x" />
              </span>
            </label>
          </li>

          <li class="col-md-2 user-cart-icon d-flex justify-content-evenly">
            <button
              onClick={() => {
                console.log("Account button clicked....");
              }}
              type="button"
              class="position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasUser"
              aria-controls="offcanvasUser"
            >
              <FontAwesomeIcon icon={faUser} size="2x" />
            </button>

            <button
              onClick={() => {
                console.log("from cart");
              }}
              type="button"
              class="position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
              <span
                class="position-absolute top-0 translate-middle badge rounded-pill"
                style={{
                  backgroundColor: "rgb(218, 87, 109)",
                  color: "white",
                  fontSize: "17px",
                  marginTop: "5px",
                }}
              >
                {fromLocalStorage.length === undefined
                  ? 0
                  : fromLocalStorage.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <CategoryDrawer />
      <CartDrawer />
      <UserDrawer />
    </>
  );
};

export default Header;
