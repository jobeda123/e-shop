import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import shoppingCartBack from "../../images/shopping_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import CartTable from "../../components/CartTable/CartTable";


const ElectronicsPage = () => {
  const bannerDetail = {
    pic: shoppingCartBack,
    title: "Shopping Cart",
  };
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Shopping Cart"}></LocationTrack>
      {/* Shopping cart detail */}
      <CartTable></CartTable>
      <Footer></Footer>
    </>
  );
};

export default ElectronicsPage;
