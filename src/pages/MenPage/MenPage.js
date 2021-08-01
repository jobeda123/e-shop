import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import menBanner from "../../images/menBanner.jpg";
import "./MenPage.css";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import FlashSaleCard from "../../components/FlashSaleCard/FlashSaleCard";

const MenPage = () => {
  const bannerDetail = {
    pic: menBanner,
    title: "Men Collection",
  };

  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products/men")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Men"}></LocationTrack>

      {/* Product Cards */}

      {products.length !== 0 ? (
        <div
          style={{ marginTop: "50px", marginBottom: "100px" }}
          className="container row d-flex justify-content-center cardArea"
        >
          {/* Latest Collection Cards */}
          <div className="row cardArea">
            {products.map((product, index) => {
              if (product.discount === 0) {
                return (
                  <LatestCollectionCard
                    item={product}
                    key={index}
                  ></LatestCollectionCard>
                );
              } else {
                return (
                  <FlashSaleCard item={product} key={index}></FlashSaleCard>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <Footer></Footer>
    </>
  );
};

export default MenPage;
