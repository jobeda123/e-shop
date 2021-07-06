import React from "react";
import { useHistory } from "react-router-dom";
import "./TotalAmountSummaryCard.css";

const TotalAmountSummaryCard = (props) => {
  let history = useHistory();
  const myArray = localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

  const deliveryCharge = 7;
  let totalPrice = 0;

  // calculate total price
  let subTotalPrice = 0;
  for (let i = 0; i < fromLocalStorage.length; i++) {
    if (fromLocalStorage[i].discount !== 0) {
      subTotalPrice +=
        fromLocalStorage[i].oldPrice -
        (fromLocalStorage[i].oldPrice * fromLocalStorage[i].discount) / 100;
    } else {
      subTotalPrice += fromLocalStorage[i].oldPrice;
    }

    totalPrice = deliveryCharge + subTotalPrice;
  }

  return (
    <div className="totalAmountSummaryCardArea">
      <h4>Total Amount Summary</h4>
      <div className="d-flex justify-content-between">
        <p>Shipping Charge:</p>
        <p>${deliveryCharge.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Sub Total Price:</p>
        <p>${subTotalPrice.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between ">
        <h6>Total Price:</h6>
        <h6>${totalPrice.toFixed(2)}</h6>
      </div>

      {props.role ==="shopping" && <button
        onClick={() => {
          console.log("Check out button click");
          history.push("/shipping");
        }}
      >
        PROCEED TO CHECKOUT
      </button>}
    </div>
  );
};

export default TotalAmountSummaryCard;
