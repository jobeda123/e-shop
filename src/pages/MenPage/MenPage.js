import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import menBack from "../../images/men_back.jpg";
import './MenPage.css';
import LocationTrack from "../../components/LocationTrack/LocationTrack";


const MenPage = () => {
  const bannerDetail = {
    pic: menBack,
    title: "Men Collection",
  };
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

export default MenPage;
