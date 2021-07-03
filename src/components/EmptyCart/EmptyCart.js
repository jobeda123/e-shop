import React from "react";
import "./EmptyCart.css";
import emptyBag from "../../images/emptyBag.jpg";


const EmptyCart = () => {
  return (
    <div className="emptyCartArea">
      <img src={emptyBag} width="250px" alt="" />
      <p>Sorry, Your cart is empty</p>
    </div>
  );
};

export default EmptyCart;
