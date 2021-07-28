import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import "./HeaderNavBar.css";
import { useContext } from "react";
import { CartContext } from "../../App";
import CategoryDrawer from "../CategoryDrawer/CategoryDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import UserDrawer from "../UserDrawer/UserDrawer";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  let history = useHistory();
  // for get cart item from local storage
  //const myArray = window.localStorage.getItem("cart");
  //const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

  const [searchText, setSearchText] = useState("");
  const [addCart] = useContext(CartContext);


  const textHandle = (e) => {
    setSearchText(e.target.value);
    document.getElementById("searchField").value = "";
  };

  return (
    <>
      <nav className="sticky-top">
        <ul>
          <li className="col-md-2 col-sm-12 py-2">
            <div className="d-flex justify-content-around">
              <button
                className="navbar-light navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCategory"
                aria-controls="offcanvasCategory"
                style={{
                  backgroundColor: "rgb(218, 87, 109)",
                  color: "#f2f2f2",
                }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <h4 className="logo" onClick={() => history.push("/")}>
                eShop
              </h4>
            </div>
          </li>

          <li className="search-icon col-md-8 col-sm-12 py-2 d-flex justify-content-center">
            <input
              id="searchField"
              type="search"
              onBlur={(e) => textHandle(e)}
              placeholder="Search"
            />

            <Link
              style={{ color: "white" }}
              to={`/productBySearch/${searchText}`}
            >
              <FontAwesomeIcon className="icon" icon={faSearch} />
            </Link>
          </li>

          <li class="col-md-2 col-sm-12 py-2 user-cart-icon d-flex justify-content-evenly">
            <button
              type="button"
              class="position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasUser"
              aria-controls="offcanvasUser"
            >
              <FontAwesomeIcon icon={faUser} size="2x" />
            </button>

            <button
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
                  marginTop: "7px",
                }}
              >
                {addCart?.length === 0
                  ? 0
                  : addCart.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <CategoryDrawer />
      <UserDrawer />
      <CartDrawer />
    </>
  );
};

export default Header;
