import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import electronicsBack from "../../images/electronics_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";


const ElectronicsPage = () => {
  const bannerDetail = {
    pic: electronicsBack,
    title: "Electronics Collection",
  };

  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Electronics"}></LocationTrack>
      {/* Product Cards */}

      <div
        style={{ marginTop: "50px", marginBottom: "100px" }}
        className="container row d-flex justify-content-center cardArea"
      >
        {/* Latest Collection Cards */}
        <div className="row cardArea">
          {products.map((product, index) => (
            <LatestCollectionCard
              item={product}
              key={index}
            ></LatestCollectionCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ElectronicsPage;
