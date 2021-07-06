import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = (props) => {
  return (
    <div className="paymentMethodArea">
      <h4>Payment Method</h4>
      <div>
        <p>Choose one of the following method</p>
        <div>
          <input type="radio" value="visa" name="paymentMethod" checked/> Visa Card or PayPal
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
