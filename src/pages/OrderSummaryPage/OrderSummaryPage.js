import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import CartTable from "../../components/CartTable/CartTable";
import ShippingPaymentInformation from "../../components/ShipmentPaymentInformation/ShipmentPaymentInformation";
import { useHistory } from "react-router-dom";
import { CartContext, OrderContext } from "./../../App";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const OrderSummaryPage = () => {
  const [orderId] = useContext(OrderContext);
  const [setAddCart] = useContext(CartContext);
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
    const empty = [];
    setAddCart(empty);
    history.push("/home");
  };

  return (
    <>
      {/* Shopping cart detail page, total amount summary, shipment information */}

      {orderId ? (
        <div className="container my-4">
          <button style={btnStyle} onClick={() => removeAll()}>
            Back To Home
          </button>

          <div className="row d-flex">
            <div className="col-md-6 mr-5 mb-5 mt-3">
              <ShippingPaymentInformation id={orderId} key={orderId} />
            </div>

            <div className="col-md-4 mt-3">
              <TotalAmountSummaryCard
                displayButton={"none"}
                displayHeight={"200px"}
                key={orderId}
              ></TotalAmountSummaryCard>
            </div>
          </div>

          <div>
            <CartTable deleteButton={"none"} key={orderId}></CartTable>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};

export default OrderSummaryPage;
