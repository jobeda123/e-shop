import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import womenBack from "../../images/women_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";


const WomenPage = () => {
  const bannerDetail ={
    pic: womenBack,
    title: "Women Collection"
  }

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Women"}></LocationTrack>
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

export default WomenPage;
