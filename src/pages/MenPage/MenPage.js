import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import menBack from "../../images/men_back.jpg";
import "./MenPage.css";
import LocationTrack from "../../components/LocationTrack/LocationTrack";


const MenPage = () => {
  const bannerDetail = {
    pic: menBack,
    title: "Men Collection",
  };

  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("http://localhost:4000/products/men")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Men"}></LocationTrack>

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

export default MenPage;
