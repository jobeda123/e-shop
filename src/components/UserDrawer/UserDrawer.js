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
import { useHistory } from "react-router";
import { useContext } from "react";
import { CartContext, UserContext } from "../../App";

const UserDrawer = () => {
  const [user, setUser] = useContext(UserContext);
  const [addCart, setAddCart] = useContext(CartContext);

  let history = useHistory();
  console.log("User info in the userDrawer", user);

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
          {user.isSignedIn === false ? (
            <div>
              {/* Log in button */}
              <button
                className="userIcon d-block d-flex justify-content-start"
                onClick={() => {
                  console.log("log in icon click");
                  history.push("/login");
                }}
              >
                <FontAwesomeIcon
                  className="d-flex align-self-center"
                  icon={faSignInAlt}
                />
                <span className="px-2">Log In</span>
              </button>

              {/* Sign Up button */}
              <button
                className="userIcon d-block d-flex justify-content-start"
                onClick={() => {
                  console.log("sign up icon click");
                  history.push("/signUp");
                }}
              >
                <FontAwesomeIcon
                  className="d-flex align-self-center"
                  icon={faUserPlus}
                />
                <span className="px-2 d-flex align-self-start">Sign Up</span>
              </button>
            </div>
          ) : (
            <div>
              {/* Dashboard button */}
              <button
                className="userIcon d-block d-flex justify-content-start"
                onClick={() => {
                  console.log("dashboard icon click");
                  history.push("/dashboard/profile");
                }}
              >
                <FontAwesomeIcon
                  className="d-flex align-self-center"
                  icon={faAddressCard}
                />
                <span className="px-2">Dashboard</span>
              </button>

              {/* Log out button */}
              <button
                className="userIcon d-block d-flex justify-content-start"
                onClick={() => console.log("log out icon click")}
              >
                <FontAwesomeIcon
                  className="d-flex align-self-center"
                  icon={faSignOutAlt}
                />
                <span
                  className="px-2"
                  onClick={() => {
                    setAddCart([]);
                    setUser({});
                  }}
                >
                  Log Out
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
