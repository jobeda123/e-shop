import React, { useMemo, useContext } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { UserContext } from "../../App";
import { OrderContext } from "./../../App";
import { useParams, Link } from "react-router-dom";

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
  const [user, setUser] = useContext(UserContext);
  const [orderId, setOrderId] = useContext(OrderContext);

  console.log(orderId);
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
    console.log("[PaymentMethod]", payload);

    const eventPaymentInfo = {
      cardName: payload.paymentMethod.card.brand,
      paymentId: payload.paymentMethod.id,
      date: new Date(),
    };
    if (payload.error === undefined) {
      const newPayment = { ...paymentInformation, eventPaymentInfo };
      setPaymentInformation(newPayment);
      localStorage.setItem("paymentInfo", JSON.stringify(newPayment));
      // store all info in the mongodb....

      const x1 = localStorage.getItem("cart");
      const cartInfo = JSON.parse(x1); // json theke array te convert
      console.log(cartInfo);

      const x2 = localStorage.getItem("paymentInfo");
      const paymentInfo = JSON.parse(x2); // json theke array te convert
      console.log(paymentInfo);

      const x3 = localStorage.getItem("shippingInfo");
      const shippingInfo = JSON.parse(x3); // json theke array te convert
      console.log(shippingInfo);

      const x4 = localStorage.getItem("totalAmount");
      const totalAmount = JSON.parse(x4); // json theke array te convert

      const x5 = localStorage.getItem("subAmount");
      const subAmount = JSON.parse(x5); // json theke array te convert

      const allInfo = { shippingInfo, ...paymentInfo };
      allInfo.allItemDetail = cartInfo;
      allInfo.email = user.email;
      allInfo.deliveredStatus = "Pending";
      allInfo.totalAmount = totalAmount.toFixed(2);
      setSaveToDB(allInfo);
      console.log(allInfo);

      fetch("http://localhost:4000/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allInfo),
      })
        .then((res) => res.json())
        .then((id) => {
          if (id) {
            console.log(id, setOrderId(id));
            setOrderId(id);
            const emptyCart = [];
            localStorage.setItem("cart", JSON.stringify(emptyCart));
            localStorage.setItem("paymentInfo", JSON.stringify({}));
            localStorage.setItem("shippingInfo", JSON.stringify({}));
            localStorage.setItem("totalAmount", JSON.stringify(""));
            localStorage.setItem("subAmount", JSON.stringify(""));
          }
        });
      alert("Successfully Purchased Your Order!!! Thank You");
      history.push("/orderSummary");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
        />
      </label>
      <br />
      <button type="submit" className="payBtn mt-3" disabled={!stripe}>
        {/* <FontAwesomeIcon className="payIcon" size="2x" icon={faCcVisa} /> */}
        CONFIRM PURCHASED
      </button>
    </form>
  );
};
export default PaymentCardForm;
