import React, { useEffect, useState, useContext } from "react";
import "./ShipmentPaymentInformation.css";
import axios from "axios";
import { OrderContext } from "./../../App";



const ShipmentPaymentInformation = () => {
  const [info, setInfo] = useState({});
  const [orderId] = useContext(OrderContext);
  

  useEffect(() => {
    console.log("Sending order id from summary page", orderId);
    axios.get("http://localhost:4000/order?id=" + orderId)
    .then((res) => {
      console.log(res.data);
      setInfo(res.data);
    })
    .catch((err) => {console.log(err)});
    
  }, [orderId]);
  

  return (
    <>
      {orderId && (info!== undefined) &&(
        <h1>Yes connect {info.shippingInfo.fullName}</h1>
        // <div className="shippingPaymentArea">
        //   <h4>Shipping And Payment Information</h4>
        //   <div>
        //     <p>
        //       Name: <span>{info.shippingInfo.fullName}</span>
        //     </p>
        //     <p>
        //       Contact: <span>{info.shippingInfo.phone}</span>
        //     </p>
        //     <p>
        //       Address:
        //       <span> {info.shippingInfo.address + " " +info.shippingInfo.city +", " + info.shippingInfo.postalCode}</span>
        //     </p>
        //     <p>
        //       Country:
        //       <span> {info.shippingInfo.country}</span>
        //     </p>
        //     <p>
        //       Order ID: <span>{orderId}</span>
        //     </p>
        //     <p>
        //       Order Date: <span>{info.eventPaymentInfo.date}</span>
        //     </p>
        //     <p>
        //       Payment Method: <span>{info.eventPaymentInfo.cardName}</span>
        //     </p>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default ShipmentPaymentInformation;
