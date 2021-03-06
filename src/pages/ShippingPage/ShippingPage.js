import React, { useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import shippingBack from "../../images/shipping_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import shippingBanner from "../../images/shippinerBanner.jpg";

const ShippingPage = () => {
  const bannerDetail = {
    pic: shippingBack,
    title: "Shipping Details",
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  const submitMethod = (data) => {
    setPaymentMethod(data);
  };

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Shipping"}></LocationTrack>

      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 my-5 mr-5">
            <ShippingAddress></ShippingAddress>
          </div>
          <div className="col-md-4 my-5">
            <TotalAmountSummaryCard
              displayButton={"none"}
              displayHeight={"200px"}
            />
            <PaymentMethod paymentFunction={submitMethod} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShippingPage;
