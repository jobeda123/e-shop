import React, { useContext, useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import CartTable from "../../components/CartTable/CartTable";
import ShippingPaymentInformation from "../../components/ShipmentPaymentInformation/ShipmentPaymentInformation";
import { useHistory } from "react-router-dom";
import { OrderContext } from "./../../App";
import axios from "axios";
import { useParams } from "react-router-dom";
import PriceSummary from "../../components/PriceSummary/PriceSummary";


const SingleOrderDetailPage = () => {
  const [oId, setOId] = useState();
  const [allInfoFromDB, setAllInfoFromDB] = useState({});
  const [bag, setBag] = useState([]);


  let history = useHistory();
  let { id } = useParams();
  console.log("from single order detail", id);


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

  return (
    <>
      {/* Shopping cart detail page, total amount summary, shipment information */}

      <h1>Yes {id}</h1>
      <div className="container my-4">
        <button
          style={btnStyle}
          onClick={() => {
            console.log("back btn click...");
            history.push("/dashboard/orderHistory");
          }}
        >
          Back
        </button>

        <div className="row d-flex">
          <div className="col-md-6 mr-5 mb-5 mt-3">
            <ShippingPaymentInformation id={id}/>
          </div>

          <div className="col-md-4 mt-3">
            <PriceSummary
              displayHeight={"200px"}
              id={id}
              key={allInfoFromDB._id}
            ></PriceSummary>
          </div>
        </div>

        <div>
          <CartTable
            deleteButton={"none"}
            id={id}
            key={allInfoFromDB._id}
          ></CartTable>
        </div>
      </div>
    </>
  );
};

export default SingleOrderDetailPage;
