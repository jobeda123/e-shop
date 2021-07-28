import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./FlashSale.css";
import FlashSaleCard from "../FlashSaleCard/FlashSaleCard";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";

const FlashSale = () => {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product.discount > 0);
        setProducts(result.slice(0, 4));
      });
  }, []);

  return (
    <>
      {products.length !== 0 ? (
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
            onClick={() => {
              history.push("/flashSale");
            }}
          >
            Load More
          </button>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default FlashSale;
