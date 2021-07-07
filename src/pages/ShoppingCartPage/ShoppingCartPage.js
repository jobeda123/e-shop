import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import shoppingCartBack from "../../images/shopping_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import CartTable from "../../components/CartTable/CartTable";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";


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

      {/* Shopping cart detail page  and total amount summary*/}
      <div className="container d-flex">
        <div className="col-md-8">
          <CartTable deleteButton={"block"}></CartTable>
        </div>
        <div className="col-md-4 my-5">
          <TotalAmountSummaryCard displayButton={"block"} displayHeight={"280px"}></TotalAmountSummaryCard>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ElectronicsPage;
