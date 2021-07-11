import React, { useEffect, useState } from "react";
import LatestCollectionCard from "../LatestCollectionCard/LatestCollectionCard";


const LatestCollection = () => {
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
        <h3 id="sectionName">Latest Collection</h3>
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
        <p>New arrival of this summer</p>
      </div>

      {/* Latest Collection Cards */}
      <div className="row cardArea">
        {products.map((product, index) => (
          <LatestCollectionCard item={product} key={index}></LatestCollectionCard>
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

export default LatestCollection;
