import React from "react";
import "./FlashSale.css";
import FlashSaleCard from "../FlashSaleCard/FlashSaleCard";

const FlashSale = () => {
  return (
    <section className="container">
      {/* title */}
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <h3 id="sectionName">Flash Sale</h3>
      </div>

      {/* Sub title */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "400",
          fontStyle: "italic",
          fontFamily: " cursive",
          color: "#AA8987",
          marginBottom: "30px",
        }}
      >
        <p>Offer sale in this month</p>
      </div>

      {/* Flash Sale Cards */}
      <div className="row cardArea">
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
        <FlashSaleCard />
      </div>

      <button
        className="loadBtn mt-4"
        onClick={() => console.log("Load More Button Is Clicking....")}
      >
        Load More
      </button>
    </section>
  );
};

export default FlashSale;
