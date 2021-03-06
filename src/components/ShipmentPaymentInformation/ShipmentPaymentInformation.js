import React, { useEffect, useState } from "react";
import "./ShipmentPaymentInformation.css";
import axios from "axios";


const ShipmentPaymentInformation = (props) => {
  const [info, setInfo] = useState({});

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
        const newInfo = {
          fullName: res.data.shippingInfo.fullName,
          address: res.data.shippingInfo.address,
          city: res.data.shippingInfo.city,
          country: res.data.shippingInfo.country,
          phone: res.data.shippingInfo.phone,
          postalCode: res.data.shippingInfo.postalCode,
          id: res.data._id,
          date: res.data.eventPaymentInfo.date,
          cardName: res.data.eventPaymentInfo.cardName,
        };
        setInfo(newInfo);
      })
      .catch((err) => {
        alert(err);
      });
  }, [props.id]);

  return (
    <>
      <div className="shippingPaymentArea">
        <h4>Shipping And Payment Information</h4>
        <div>
          <p>
            Name: <span>{info.fullName}</span>
          </p>
          <p>
            Contact: <span>{info.phone}</span>
          </p>
          <p>
            Address:
            <span>
              {" "}
              {info.address + " " + info.city + ", " + info.postalCode}
            </span>
          </p>
          <p>
            Country:
            <span> {info.country}</span>
          </p>
          <p>
            Order ID: <span>{info.id}</span>
          </p>
          <p>
            Order Date: <span>{info.date}</span>
          </p>
          <p>
            Payment Method: <span>{info.cardName}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ShipmentPaymentInformation;
