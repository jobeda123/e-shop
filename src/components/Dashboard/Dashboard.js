import React from "react";
import "./Dashboard.css";
import { useHistory } from "react-router";
import { CartContext, UserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from './../../App';


const Dashboard = ({ whichBtn }) => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [addCart, setAddCart] = useContext(CartContext);
  const [orderId, setOrderId] = useContext(OrderContext);

  
  
  const handleLogout = () => {
    localStorage.removeItem('cart');
    localStorage.removeItem('shippingInfo');
    localStorage.removeItem('paymentInfo');
    localStorage.removeItem('totalAmount');
    console.log("log out button click");
    setAddCart([]);
    setUser({});
    setOrderId("");
    history.push("/login");
  };

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
          Order History
        </button>

        {user.role === "admin" && (
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
          onClick={() => handleLogout()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
