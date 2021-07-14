import React, { useEffect } from "react";
import "./FlashSale.css";
import FlashSaleCard from "../FlashSaleCard/FlashSaleCard";
import { useState } from "react";



const FlashSale = (props) => {
  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
        {products.map((product, index) => (
          <FlashSaleCard item={product} key={index}></FlashSaleCard>
        ))}
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
