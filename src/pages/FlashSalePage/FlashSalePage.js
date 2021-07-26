import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import jewelleryBack from "../../images/jewellery_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import FlashSaleCard from "../../components/FlashSaleCard/FlashSaleCard";

const FlashSalePage = () => {
  const bannerDetail = {
    pic: jewelleryBack,
    title: "Flash Sale Collection",
  };
  const [products, setProducts] = useState([]);


  // to get data from server
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const result = data.filter(product =>product.discount>0);
        console.log(result);
        setProducts(result)
      });
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Flash Sale"}></LocationTrack>
      {/* Product Cards */}

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
      <Footer></Footer>
    </>
  );
};

export default FlashSalePage;
