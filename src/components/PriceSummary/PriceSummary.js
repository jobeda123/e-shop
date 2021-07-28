import React, { useState, useEffect } from "react";
import axios from "axios";

const PriceSummary = (props) => {
  const displayHeight = props.displayHeight;

  const deliveryCharge = 7;

  const [price, setPrice] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://boiling-headland-36176.herokuapp.com/order?id=" + props.id,
        {
          headers: {
            authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const newPrice = {
          totalAmount: res.data.totalAmount,
          subAmount: res.subAmount,
        };
        setPrice(newPrice);
      })
      .catch((err) => {});
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
            <p>${price.subAmount}</p>
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
