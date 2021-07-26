import React, { useEffect, useState, useContext } from "react";
import "./ShipmentPaymentInformation.css";
import axios from "axios";



const ShipmentPaymentInformation = (props) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log("Sending order id from summary page", props.id);
    axios
      .get("http://localhost:4000/order?id=" + props.id, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const newInfo={
          fullName: res.data.shippingInfo.fullName,
          address: res.data.shippingInfo.address,
          city: res.data.shippingInfo.city,
          country: res.data.shippingInfo.country,
          phone: res.data.shippingInfo.phone,
          postalCode: res.data.shippingInfo.postalCode,
          id: res.data._id,
          date: res.data.eventPaymentInfo.date,
          cardName:res.data.eventPaymentInfo.cardName,
        };
        setInfo(newInfo);
        console.log(newInfo);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <>
      {loading===false ? (
        // <h1>Yes connect</h1>
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
              <span> {info.address + " " +info.city +", " + info.postalCode}</span>
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
      ):
      <h1>Loading</h1>
      }
    </>
  );
};

export default ShipmentPaymentInformation;
