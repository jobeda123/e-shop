import React from "react";
import LatestCollectionCard from '../LatestCollectionCard/LatestCollectionCard';


const LatestCollection = () => {
  return (
    <section className="container">
      {/* title */}
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <div className="titleLine align-self-center"></div>
        <h3 id="sectionName">Latest Collection</h3>
        <div className="titleLine align-self-center"></div>
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
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
      </div>

      <button className="loadBtn mt-4"
      onClick={() =>console.log("Load More Button Is Clicking....")}
      >Load More</button>
    </section>
  );
};

export default LatestCollection;
