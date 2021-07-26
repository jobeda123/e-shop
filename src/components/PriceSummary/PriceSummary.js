import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const PriceSummary = (props) => {
  let history = useHistory();
  //   const displayButton = props.displayButton;
  const displayHeight = props.displayHeight;

  const deliveryCharge = 7;
  let subTotalPrice = 0;
  let totalPrice = 0;

  const [price, setPrice] = useState({});
  const [cart, setCart] = useState([]);
  console.log(cart.length);
  console.log(price);

//   const calculateTotalPrice = (cartItem) => {
//     // calculate total price
//     let subTotalPrice = 0;
//     let totalPrice = 0;
//     for (let i = 0; i < cartItem.length; i++) {
//       if (cartItem[i].discount !== 0) {
//         subTotalPrice +=
//           cartItem[i].oldPrice -
//           (cartItem[i].oldPrice * cartItem[i].discount) / 100;
//       } else {
//         subTotalPrice += cartItem[i].oldPrice;
//       }

//       totalPrice = deliveryCharge + subTotalPrice;
//     }
//     return [totalPrice, subTotalPrice];
//   };

  useEffect(() => {
    console.log("Sending order id from single order detail", props.id);
    axios
      .get("http://localhost:4000/order?id=" + props.id, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const newPrice= {
          totalAmount: res.data.totalAmount,
          subAmount: res.subAmount,
        };
        setPrice(newPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]); 

  return (
    <>
      {price && (
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
            <p>${price.totalAmount}</p>
          </div>
          <div className="d-flex justify-content-between ">
            <h6>Total Price:</h6>
            <h6>${price.totalAmount}</h6>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceSummary;
