import React from "react";
import "./Dashboard.css";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { useContext } from "react";

const Dashboard = ({ whichBtn }) => {
  const whichRole = "admin";
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row d-flex dashboardArea">
        <button id="dashboardBtn" disabled>
          Dashboard
        </button>

        <button
          style={{ backgroundColor: whichBtn === "profile" && "lightgray" }}
          onClick={() => {
            console.log("Profile....");
            history.push("/dashboard/profile");
          }}
        >
          My Profile
        </button>

        <button
          style={{
            backgroundColor: whichBtn === "order" && "lightgray",
          }}
          onClick={() => {
            console.log("Order history and status....");
            history.push("/dashboard/OrderHistory");
          }}
        >
          {whichRole !== "admin" ? "Order History" : "Order Status"}
        </button>

        {whichRole === "admin" && (
          <>
            <button
              style={{
                backgroundColor: whichBtn === "addAdmin" && "lightgray",
              }}
              onClick={() => {
                console.log("Add Admin....");
                history.push("/dashboard/addAdmin");
              }}
            >
              Add Admin
            </button>

            <button
              style={{
                backgroundColor: whichBtn === "addProduct" && "lightgray",
              }}
              onClick={() => {
                console.log("Product....");
                history.push("/dashboard/addProduct");
              }}
            >
              Add Product
            </button>
          </>
        )}

        <button
          onClick={() => setUser({})}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
