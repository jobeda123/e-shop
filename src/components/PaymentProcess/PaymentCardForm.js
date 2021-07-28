import React, { useMemo, useContext } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../App";
import { OrderContext } from "./../../App";

const useOptions = () => {
  const fontSize = "15px";
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "black",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "red",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const PaymentCardForm = () => {
  const [paymentInformation, setPaymentInformation] = useState({});
  const [saveToDB, setSaveToDB] = useState({});
  const [user] = useContext(UserContext);
  const [orderId,setOrderId] = useContext(OrderContext);

  let history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    const time = new Date().toDateString("DD MMM, YYYY");
    const eventPaymentInfo = {
      cardName: payload.paymentMethod.card.brand,
      paymentId: payload.paymentMethod.id,
      date: time,
    };
    if (payload.error === undefined) {
      const newPayment = { ...paymentInformation, eventPaymentInfo };
      setPaymentInformation(newPayment);
      window.localStorage.setItem("paymentInfo", JSON.stringify(newPayment));

      // store all info in the mongodb....
      const x1 = window.localStorage.getItem("cart");
      const cartInfo = JSON.parse(x1); // json theke array te convert

      const x2 = window.localStorage.getItem("paymentInfo");
      const paymentInfo = JSON.parse(x2); // json theke array te convert

      const x3 = window.localStorage.getItem("shippingInfo");
      const shippingInfo = JSON.parse(x3); // json theke array te convert

      const x4 = window.localStorage.getItem("totalAmount");
      const totalAmount = JSON.parse(x4); // json theke array te convert

      const x5 = window.localStorage.getItem("subAmount");
      const subAmount = JSON.parse(x5); // json theke array te convert

      const allInfo = { shippingInfo, ...paymentInfo };
      allInfo.allItemDetail = cartInfo;
      allInfo.email = user.email;
      allInfo.deliveredStatus = "Pending";
      allInfo.totalAmount = totalAmount.toFixed(2);
      allInfo.subAmount = subAmount.toFixed(2);
      setSaveToDB(allInfo);

      if (saveToDB) {
        fetch("https://boiling-headland-36176.herokuapp.com/addOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(allInfo),
        })
          .then((res) => res.json())
          .then((id) => {
            if (id) {
              setOrderId(id);
              const emptyCart = [];
              window.localStorage.setItem("cart", JSON.stringify(emptyCart));
              window.localStorage.setItem("paymentInfo", JSON.stringify({}));
              window.localStorage.setItem("shippingInfo", JSON.stringify({}));
              window.localStorage.setItem("totalAmount", JSON.stringify(""));
              window.localStorage.setItem("subAmount", JSON.stringify(""));
            }
          });
        alert("Successfully Purchased Your Order!!! Thank You");
        history.push("/orderSummary");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>
      <br />
      <button type="submit" className="payBtn mt-3" disabled={!stripe}>
        CONFIRM PURCHASED
      </button>
    </form>
  );
};
export default PaymentCardForm;
