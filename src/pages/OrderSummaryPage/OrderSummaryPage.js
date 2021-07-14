import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import CartTable from "../../components/CartTable/CartTable";
import ShippingPaymentInformation from "../../components/ShipmentPaymentInformation/ShipmentPaymentInformation";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { OrderContext } from "./../../App";
import axios from "axios";

const OrderSummaryPage = () => {
  const [orderId, setOrderId] = useContext(OrderContext);
  const [allInfoFromDB, setAllInfoFromDB] = useState({});

  let history = useHistory();
  const btnStyle = {
    border: "none",
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    fontWeight: "500",
    display: "flex",
    marginBottom: "20px",
  };

  const removeAll = () => {
    console.log("back to home");
    history.push("/home");
  };

  useEffect(() => {
    console.log("Sending order id from summary page", orderId);
    axios.get("http://localhost:4000/order?id=" + orderId)
    .then(res => {
      console.log(res,res.data);
      setAllInfoFromDB(res.data);
    });
  }, [orderId]);

  return (
    <>
      {/* Shopping cart detail page, total amount summary, shipment information */}

      <div className="container my-4">
        <button style={btnStyle} onClick={() => removeAll()}>
          Back To Home
        </button>
        <div className="row d-flex">
          <div className="col-md-6 mr-5 mb-5 mt-3">
            <ShippingPaymentInformation oId={orderId} shippingData={allInfoFromDB.shippingInfo} paymentInfoData={allInfoFromDB.eventPaymentInfo}/>
          </div>
          <div className="col-md-4  mt-3">
            <TotalAmountSummaryCard
              displayButton={"none"}
              displayHeight={"200px"}
            ></TotalAmountSummaryCard>
          </div>
        </div>
        <div>
          <CartTable deleteButton={"none"}></CartTable>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummaryPage;
