import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import jewelleryBack from "../../images/jewellery_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const LatestCollectionPage = () => {
  const bannerDetail = {
    pic: jewelleryBack,
    title: "Latest Collection",
  };
  const [products, setProducts] = useState([]);

  // to get data from server
  useEffect(() => {
    fetch("https://boiling-headland-36176.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product.discount === 0);
        setProducts(result);
      });
  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Latest Collection"}></LocationTrack>
      {/* Product Cards */}

      {products.length !== 0 ? (
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
      ) : (
        <LoadingSpinner />
      )}

      <Footer></Footer>
    </>
  );
};

export default LatestCollectionPage;
