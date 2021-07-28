import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../App";
import "./TotalAmountSummaryCard.css";

const TotalAmountSummaryCard = (props) => {
  let history = useHistory();
  const deliveryCharge = 7;

  const [btnHeight, setBtnHeight] = useState({});

  const [price, setPrice] = useState({});
  const [cart, setCart] = useState([]);
  const [addCart] = useContext(CartContext);

  useEffect(() => {
    const newBtnHeight = {
      btn: props.displayButton,
      height: props.displayHeight,
    };
    setBtnHeight(newBtnHeight);

    const newItem = [...addCart];
    setCart(newItem);
    let subTotalPrice = 0;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].discount !== 0) {
        subTotalPrice +=
          cart[i].oldPrice - (cart[i].oldPrice * cart[i].discount) / 100;
      } else {
        subTotalPrice += cart[i].oldPrice;
      }

      totalPrice = deliveryCharge + subTotalPrice;
    }

    window.localStorage.setItem("totalAmount", JSON.stringify(totalPrice));
    window.localStorage.setItem("subAmount", JSON.stringify(subTotalPrice));
    const newPrice = {
      totalAmount: totalPrice,
      subAmount: subTotalPrice,
    };
    setPrice(newPrice);
  }, [props.displayButton, props.displayHeight]);

  return (
    <>
      <div
        className="totalAmountSummaryCardArea"
        style={{ height: btnHeight.height }}
      >
        <h4>Total Amount Summary</h4>
        <div className="d-flex justify-content-between">
          <p>Shipping Charge:</p>
          <p>${deliveryCharge}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Sub Total Price:</p>
          <p>${price.subAmount}</p>
        </div>
        <div className="d-flex justify-content-between ">
          <h6>Total Price:</h6>
          <h6>${price.totalAmount}</h6>
        </div>

        <button
          style={{ display: btnHeight.btn }}
          onClick={() => {
            history.push("/shipping");
          }}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </>
  );
};

export default TotalAmountSummaryCard;
