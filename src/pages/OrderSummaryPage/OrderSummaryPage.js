import React, { useContext, useState, useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import CartTable from "../../components/CartTable/CartTable";
import ShippingPaymentInformation from "../../components/ShipmentPaymentInformation/ShipmentPaymentInformation";
import { useHistory } from "react-router-dom";
import { OrderContext } from "./../../App";


const OrderSummaryPage = () => {
  const [orderId, setOrderId] = useContext(OrderContext);
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

  
  return (
    <>
      {/* Shopping cart detail page, total amount summary, shipment information */}

      {orderId && <div className="container my-4">
        <h1>{orderId}</h1>
        <button style={btnStyle} onClick={() => removeAll()}>
          Back To Home
        </button>
        {/* <div>{orderId}</div> */}

        <div className="row d-flex">
          <div className="col-md-6 mr-5 mb-5 mt-3">
            <ShippingPaymentInformation id={orderId}/>
          </div>

          <div className="col-md-4 mt-3">
            <TotalAmountSummaryCard
              displayButton={"none"}
              displayHeight={"200px"}
            ></TotalAmountSummaryCard>
          </div>

        </div>

        <div>
          <CartTable deleteButton={"none"}></CartTable>
        </div>

      </div>}
      <Footer />
    </>
  );
};

export default OrderSummaryPage;
