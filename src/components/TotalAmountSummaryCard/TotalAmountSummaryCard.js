import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./TotalAmountSummaryCard.css";


const TotalAmountSummaryCard = (props) => {
  let history = useHistory();
  const deliveryCharge = 7;
  const displayButton = props.displayButton;
  const displayHeight = props.displayHeight;

  const myArray = window.localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

  const [price, setPrice] = useState({});
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(cart.length);
  console.log(price);


  useEffect(() => {
    const newItem = [...fromLocalStorage];
    console.log(newItem);
    setCart(newItem);
    let subTotalPrice = 0;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].discount !== 0) {
        subTotalPrice +=
        cart[i].oldPrice -
          (cart[i].oldPrice * cart[i].discount) / 100;
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
    setLoading(false);
  }, [loading]);



  return (
    <>
      {loading===false ? (

        <div
          className="totalAmountSummaryCardArea"
          style={{ height: displayHeight }}
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
            style={{ display: displayButton }}
            onClick={() => {
              console.log("Check out button click");
              history.push("/shipping");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )
    :
    <h1>Loading</h1>
    }
    </>
  );
};

export default TotalAmountSummaryCard;
