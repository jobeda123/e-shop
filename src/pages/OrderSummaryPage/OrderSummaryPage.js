import React from "react";
import Footer from "../../components/Footer/Footer";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import CartTable from "../../components/CartTable/CartTable";
import ShippingPaymentInformation from "../../components/ShipmentPaymentInformation/ShipmentPaymentInformation";
import { useHistory } from "react-router-dom";

const OrderSummaryPage = () => {
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
    localStorage.removeItem("cart");
    localStorage.removeItem("paymentInfo");
    localStorage.removeItem("shippingInfo");
    history.push("/home");
  };

  return (
    <>
      {/* Shopping cart detail page, total amount summary, shipment information */}

      <div className="container my-4">
        <button style={btnStyle} onClick={() => removeAll()}>
          Back To Home
        </button>
        <div className="row d-flex">
          <div className="col-md-6 mr-5 mb-5 mt-3">
            <ShippingPaymentInformation />
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
