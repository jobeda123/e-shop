import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import jewelleryBack from "../../images/jewellery_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";


const JewelleryPage = () => {
  const bannerDetail = {
    pic: jewelleryBack,
    title: "Jewellery Collection",
  };

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Jewellery"}></LocationTrack>
      {/* Product Cards */}

      <div
        style={{ marginTop: "50px", marginBottom: "100px" }}
        className="container row d-flex justify-content-center cardArea"
      >
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
        <LatestCollectionCard />
      </div>
      <Footer></Footer>
    </>
  );
};

export default JewelleryPage;
