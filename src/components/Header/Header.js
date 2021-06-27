import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import pic from "../../images/jewellery.png";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li className="col-md-2">
          <div className="d-flex justify-content-around">
            <button
              className="navbar-light navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "#EBB5AC" }}
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
              <FontAwesomeIcon
                className="icon"
                icon={faSearch}
                size="3x"
              />
            </span>
          </label>
        </li>

        <li class="col-md-2 user-cart-icon d-flex justify-content-evenly">
          <button type="button" class="position-relative">
            <FontAwesomeIcon icon={faUser} size="2x"/>
          </button>

          <button type="button" class="position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor:"#EBB5AC", color:"black"}}>
              1
            </span>
          </button>

        </li>
      </ul>
    </nav>
  );
};

export default Header;
