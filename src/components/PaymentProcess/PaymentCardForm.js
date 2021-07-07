import React, { useMemo } from "react";
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
    if (payload.error === undefined) {
      alert("Successfully Purchased Your Order!!! Thank You");
      history.push("/home");
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
      <button type="submit" className="payBtn" disabled={!stripe}>
        {/* <FontAwesomeIcon className="payIcon" size="2x" icon={faCcVisa} /> */}
         CONFIRM PURCHASED
      </button>
    </form>
  );
};
export default PaymentCardForm;
