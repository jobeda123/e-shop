import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import flashSaleBanner from "../../images/flashSaleBanner.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import FlashSaleCard from "../../components/FlashSaleCard/FlashSaleCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const FlashSalePage = () => {
  const bannerDetail = {
    pic: flashSaleBanner,
    title: "Flash Sale Collection",
  };
  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product.discount > 0);
        setProducts(result);
      });
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Flash Sale"}></LocationTrack>
      {/* Product Cards */}

      {products.length !== 0 ? (
        <div
          style={{ marginTop: "50px", marginBottom: "100px" }}
          className="container row d-flex justify-content-center cardArea"
        >
          {/* Flash Sale Collection Cards */}
          <div className="row cardArea">
            {products.map((product, index) => (
              <FlashSaleCard item={product} key={index}></FlashSaleCard>
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <Footer></Footer>
    </>
  );
};

export default FlashSalePage;
