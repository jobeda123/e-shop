import React, { useEffect, useState } from "react";
import LatestCollectionCard from "../LatestCollectionCard/LatestCollectionCard";
import { useHistory } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LatestCollection = () => {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product.discount === 0);
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
              <LatestCollectionCard
                item={product}
                key={index}
              ></LatestCollectionCard>
            ))}
          </div>

          <button
            className="loadBtn mt-4"
            onClick={() => {
              history.push("/latestCollection");
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

export default LatestCollection;
