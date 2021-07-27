import React from "react";


const CartPriceDetail = () => {
  const myArray = window.localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert
  // console.log(fromLocalStorage);

  const deliveryCharge = 7;
  let totalPrice = 0;
  // calculate total price
  let subTotalPrice = 0;
  for (let i = 0; i < fromLocalStorage?.length; i++) {
    if (fromLocalStorage[i].discount !== 0) {
      subTotalPrice +=
        fromLocalStorage[i].oldPrice -
        (fromLocalStorage[i].oldPrice * fromLocalStorage[i].discount) / 100;
    } else {
      subTotalPrice += fromLocalStorage[i].oldPrice;
    }

    totalPrice = deliveryCharge + subTotalPrice;
    // console.log("total price: ", subTotalPrice);
  }

  return (
    <div className="pt-2">
      <div className="d-flex justify-content-between" style={{ color: "gray" }}>
        <h6>Shipping Charge : </h6>
        <h6>${deliveryCharge}</h6>
      </div>

      <div
        className="d-flex justify-content-between pb-2"
        style={{ color: "gray", borderBottom: "1px solid gray", }}
      >
        <h6>Sub Total Price : </h6>
        <h6>${subTotalPrice.toFixed(2)}</h6>
      </div>

      <div className="d-flex justify-content-between py-2" style={{ color: "black" }}>
        <h5>Total Price : </h5>
        <h5>${totalPrice.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default CartPriceDetail;
