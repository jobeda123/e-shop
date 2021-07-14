import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ShipmentPaymentInformation.css";

const ShipmentPaymentInformation = (props) => {
  const [shipping, setshipping] = useState({});
  const [payment, setPayment] = useState({});

  console.log(props);

  useEffect(() => {
    setshipping(props.shippingData.data);
    setPayment(props.paymentInfoData);
  }, [props.oId]);

  return (
    <div className="shippingPaymentArea">
      <h4>Shipping And Payment Information</h4>
      <div>
        <p>
          Name: <span>{shipping.fullName}</span>
        </p>
        <p>
          Contact: <span>{shipping.phone}</span>
        </p>
        <p>
          Address:
          <span>
            {" " +
              shipping.address +
              shipping.city +
              ", " +
              shipping.postalCode}
          </span>
        </p>
        <p>
          Country:
          <span>{" " + shipping.country}</span>
        </p>
        <p>
          Order ID: <span>{props.oId}</span>
        </p>
        <p>
          Order ID: <span>{props.oId}</span>
        </p>
        <p>
          Order Date: <span>{payment.date}</span>
        </p>
        <p>
          Payment Method: <span>{payment.cardName}</span>
        </p>
      </div>
    </div>
  );
};

export default ShipmentPaymentInformation;
