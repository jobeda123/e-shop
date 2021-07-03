import React from "react";
import "./UserDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faAddressCard,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";

const UserDrawer = () => {
  return (
    <div
      class="offcanvas offcanvas-end userCanvasWidth"
      tabindex="-1"
      id="offcanvasUser"
      aria-labelledby="offcanvasUserLabel"
    >
      <div class="offcanvas-header">
        <h4 class="offcanvas-title" id="offcanvasUserLabel">
          Account
        </h4>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div style={{ borderTop: "1px solid gray", paddingTop: "10px" }}>

          <div>
            <button
              className="userIcon d-block d-flex justify-content-start"
              onClick={() => console.log("log in icon click")}
            >
              <FontAwesomeIcon className="d-flex align-self-center" icon={faSignInAlt} />
              <span className="px-2">Log In</span>
            </button>

            <button
              className="userIcon d-block d-flex justify-content-start"
              onClick={() => console.log("sign up icon click")}
            >
              <FontAwesomeIcon className="d-flex align-self-center"  icon={faUserPlus} />
              <span className="px-2 d-flex align-self-start">Sign Up</span>
            </button>
          </div>

         <div>
         <button
            className="userIcon d-block d-flex justify-content-start"
            onClick={() => console.log("dashboard icon click")}
          >
            <FontAwesomeIcon className="d-flex align-self-center"  icon={faAddressCard} />
            <span className="px-2">Dashboard</span>
          </button>

          <button
            className="userIcon d-block d-flex justify-content-start"
            onClick={() => console.log("order history icon click")}
          >
            <FontAwesomeIcon className="d-flex align-self-center"  icon={faColumns} />
            <span className="px-2">Order History</span>
          </button>

          <button
            className="userIcon d-block d-flex justify-content-start"
            onClick={() => console.log("log out icon click")}
          >
            <FontAwesomeIcon className="d-flex align-self-center"  icon={faSignOutAlt} />
            <span className="px-2">Log Out</span>
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
