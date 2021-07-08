import React from "react";
import "./ShipmentPaymentInformation.css";

const ShipmentPaymentInformation = () => {
  const myShipping = JSON.parse(localStorage.getItem("shippingInfo")); // json theke array te convert
  const myPaymentInfo = JSON.parse(localStorage.getItem("paymentInfo")); // json theke array te convert
  let { fullName, phone, address, city, postalCode, country }=0;
  let { cardName, date } = 0;

  if (myPaymentInfo !== null || myShipping !== null) {
    const { fullName, phone, address, city, postalCode, country } =
      myShipping.data;
    const { cardName, date } = myPaymentInfo.eventPaymentInfo;
  }

  return (
    <div className="shippingPaymentArea">
      <h4>Shipping And Payment Information</h4>
      { (myShipping !== null && myPaymentInfo !== null)  &&
        <div>
        <p>
          Name: <span>{fullName}</span>
        </p>
        <p>
          Contact: <span>{phone}</span>
        </p>
        <p>
          Address:
          <span>{" " + address + city + ", " + postalCode}</span>
        </p>
        <p>
          Country:
          <span>{" " + country}</span>
        </p>
        <p>
          Order ID: <span>from mongoDB</span>
        </p>
        <p>
          Order Date: <span>{date}</span>
        </p>
        <p>
          Payment Method: <span>{cardName}</span>
        </p>
      </div>}
    </div>
  );
};

export default ShipmentPaymentInformation;
